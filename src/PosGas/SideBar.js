import React, { useEffect, useState } from "react";

const SideBar = () => {
    const [isAdmin, setIsAdmin] = useState('');

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    useEffect(() => {

        const role = localStorage.getItem('async_role');
        if (role === 'Admin') {
            setIsAdmin(true);
        }
        if (role === '' || role === null) {
            window.location.href = '/';
        }

    }, [])

    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Concept - Bootstrap 4 Admin Dashboard Template</title>
                <link rel="stylesheet" href="../assets/vendor/bootstrap/css/bootstrap.min.css" />
                <link href="../assets/vendor/fonts/circular-std/style.css" rel="stylesheet" />
                <link rel="stylesheet" href="../assets/libs/css/style.css" />
                <link rel="stylesheet" href="../assets/vendor/fonts/fontawesome/css/fontawesome-all.css" />
            </head>
            <body>
                <div class="nav-left-sidebar sidebar-dark" style={{fontSize: '10px', backgroundColor: '#B03F82'}}>
                    <div class="menu-list">

                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="d-xl-none d-lg-none" href="0">Finance Dashboard</a>
                            <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}>
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-divider">
                                        <a className="nav-link" href="menu" style={{fontSize: '12px',  color: '#fff' }}   >Menu </a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link active" href="findashboard" style={{fontSize: '12px'}}   >Dashboard <span className="badge badge-success">6</span></a> */}
                                        <a className="nav-link" href="findashboard" style={{fontSize: '12px',  color: '#fff' }}   >Dashboard <span className="badge badge-success">6</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/posgas" style={{fontSize: '14px', color:'#fff'}}>Remote View</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/saleshift" style={{fontSize: '14px', color:'#fff'}}>Sales Shift</a>
                                    </li>

                                    <li className="nav-item" style={{ marginTop: '450px', color: '#fff' }}>
                                        <a style={{ color: '#fff' }} className="nav-link" href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default SideBar;