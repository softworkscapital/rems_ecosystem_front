import React, { useState, useEffect } from "react";
import { MD5 } from 'crypto-js';
import { API_URL } from "./config";
import { BarLoader } from "react-spinners";
import Swal from "sweetalert2";

const Login = () => {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        localStorage.clear();
    }, []);

    const checkOtp = (user_email, user_otp) => {
        console.log('function called');
        console.log('user email: ', user_email);
        console.log('user otp: ', user_otp);
        try {
            fetch(`${API_URL}/users/user/${user_email}/${user_otp}`)
                .then(res => res.json())
                .then(resp => {
                    console.log('function called 2');
                    console.log(resp.length);
                    console.log(resp);
                    if (resp.length > 0) {
                        console.log(resp[0].userid);
                        localStorage.setItem('user', resp[0].userid);
                        localStorage.setItem('async_client_profile_id', resp[0].client_profile_id);
                        localStorage.setItem('async_role', resp[0].role);
                        localStorage.setItem('async_username', resp[0].email);
                        localStorage.setItem('async_userName', resp[0].username);
                        localStorage.setItem('branch_id', resp[0].branch_id);
                        const id = resp[0].userid;
                        window.location.href = '/passwordsetup';
                    } else {
                        Swal.fire({                                            
                            text: "Login Failed",
                            icon: "error"
                          });
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    Swal.fire({                                            
                        text: "Login Failed",
                        icon: "error"
                      });
                    // alert("Login failed, check your network connection!");
                });
        } catch (error) {
            console.log(error);
            Swal.fire({                                            
                text: "Login Failed",
                icon: "error"
              });
        }
    };

    useEffect(() => {
        setPasswordHash(MD5(password).toString());
    }, [password])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(passwordHash);
        try {
            setIsLoading(true);
            fetch(`${API_URL}/users/${email}/${passwordHash}`)
                .then(res => res.json())
                .then(resp => {

                    if (resp.length === 1) {
                        console.log(resp.length);
                        console.log(resp[0].userid);
                        localStorage.setItem('user', resp[0].userid);
                        localStorage.setItem('userName', resp[0].username);
                        localStorage.setItem('async_client_profile_id', resp[0].client_profile_id);
                        localStorage.setItem('async_role', resp[0].role);
                        localStorage.setItem('async_username', resp[0].email);
                        localStorage.setItem('branch_id', resp[0].branch_id);

                        if (resp[0].role === 'Admin') {
                            window.location.href = '/menu';
                        } else {
                            window.location.href = '/menu';
                        }

                    } else {
                        try {
                            fetch(`${API_URL}/users/user/${email}/${password}`)
                                .then(res => res.json())
                                .then(resp => {
                                    console.log('function called 2');
                                    console.log(resp.length);
                                    if (resp.length > 0) {
                                        console.log(resp[0].userid);
                                        localStorage.setItem('user', resp[0].userid);
                                        localStorage.setItem('async_client_profile_id', resp[0].client_profile_id);
                                        localStorage.setItem('async_role', resp[0].role);
                                        localStorage.setItem('async_username', resp[0].email);
                                        const id = resp[0].userid;
                                        window.location.href = '/passwordsetup';
                                    } else {
                                        // toast.warning("Login failed, incorrect username or password");
                                    
                                        Swal.fire({
                                            
                                            text: "Incorrect Username or Password!",
                                            icon: "error"
                                          });

                                        setIsLoading(false);
                                    }
                                })
                                .catch(err => {
                                    console.log(err.message);
                                    setIsLoading(false);
                                    
                                    Swal.fire({                                            
                                        text: "Login Failed",
                                        icon: "error"
                                      });
                                    // alert("Login failed, check your network connection!");
                                });
                        } catch (error) {
                            console.log(error);
                            setIsLoading(false);
                            Swal.fire({                                            
                                text: "Login Failed",
                                icon: "error"
                              });
                        }
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    // alert("Login failed, incorrect username or password");
                    setIsLoading(false);
                    Swal.fire({                                            
                        text: "Login failed, check your netork connection!",
                        icon: "error"
                      });
                });
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            Swal.fire({                                            
                text: "Login Failed",
                icon: "error"
              });
        }
    };

    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Login</title>
                <link rel="stylesheet" href="../assets/vendor/bootstrap/css/bootstrap.min.css" />
                <link href="../assets/vendor/fonts/circular-std/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/libs/css/style.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome/css/fontawesome-all.css" />
            </head>

            <body
                style={{
                    height: '100%',
                    display: '-ms-flexbox flex',
                    // display: '',
                    msFlexAlign: 'center',
                    alignItems: 'center',
                    paddingTop: '40px',
                    paddingBottom: '40px',
                }}
            >
                <div class="splash-container">
                    <div class="card ">
                        <div class="card-header text-center"><h2 style={{ color: 'blue' }}>REMS</h2><span class="splash-description">Business Ecosystem
                        </span></div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input class="form-control form-control-lg" type="text" value={email} onChange={e => setUsername(e.target.value)} id="email" placeholder="email" autocomplete="off" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control form-control-lg" type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" required placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" /><span class="custom-control-label">Remember Me</span>
                                    </label>
                                </div>
                                <button onClick={handleSubmit} class="btn btn-primary btn-lg btn-block">Sign in</button>
                            </form>
                        </div>
                        <div class="card-footer bg-white p-0  ">
                            <div class="card-footer-item card-footer-item-bordered">
                                <a href="/account/registration" class="footer-link">Create An Account</a></div>
                            <div class="card-footer-item card-footer-item-bordered">
                                <a href="0" class="footer-link">Forgot Password</a>
                            </div>
                        </div>
                        {isLoading && <BarLoader size={40} width={'100%'} color="blue" loading />}
                    </div>
                </div>

                <script src="../assets/vendor/jquery/jquery-3.3.1.min.js"></script>
                <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
            </body>
        </div >
    );
}

export default Login;