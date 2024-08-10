import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import TopNav from "../TopNav";
import Footer from "../Footer";
import { API_URL } from "../config";

const FinDashboard = () => {

    const [awareness, setAwareness] = useState(0);
    const [interest, setInterest] = useState(0);
    const [decision, setDecision] = useState(0);
    const [action, setAction] = useState(0);
    const [staticAcc, setStaticAcc] = useState([]);
    const [adminExpBal, setAdminExpBal] = useState(0);
    const [directExpBal, setDirectExpBal] = useState(0);
    const [incomeBal, setIncomeBal] = useState(0);

    const [branches, setBranches] = useState([]);

    // const branchId = localStorage.getItem('branch_id');
    const branchId = 11;
    const companyId = 4;
    const [branchName, setBranchName] = useState('');

    const [closingStock, setClosingStock] = useState('');

    // useEffect(() => {
    //     fetch(`${API_URL}/branches/${branchId}`)
    //         .then(res => res.json())
    //         .then(resp => {
    //             setBranchName(resp[0].branch_name);
    //         })
    //         .catch(err => console.log(err.message));
    // }, [branchId]);

    useEffect(() => {
        fetch(`${API_URL}/payments/branch/${branchId}/${companyId}`)
            .then(res => res.json())
            .then(resp => {
                setBranches(resp);
            })
            .catch(err => console.log(err.message));
    }, [])

    useEffect(()=>{
        const getLastClosingStock = () =>{
            fetch(`${API_URL}/saleshift/${branchId}`)
            .then(res => res.json())
            .then(resp => {
                setClosingStock(resp[0].closing_inventory);
            })
            .catch(err => console.log(err.message));
        }


        getLastClosingStock();

    },[])


    return (
        <div>
            <html>
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
                    <div class="dashboard-main-wrapper">
                        <TopNav></TopNav>
                        <SideBar></SideBar>




                        <div class="dashboard-wrapper">
                            <div class="container-fluid dashboard-content" style={{}}>
                                <div class='row' style={{ marginLeft: '1%', textAlign: 'center' }}>
                                    {branches.map((option) => (
                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div key={option.branch_id} >
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h3 class="text-muted" style={{fontFamily: 'sans-serif'}}>{option.branch_name}</h3>
                                                        <div className="metric-value d-inline-block text-end" style={{ fontFamily: 'sans-serif' }} >
                                                            <div className="row">
                                                                <div className="col-xl-6">
                                                                    <h2 className="mb-1" style={{ fontSize: '15px', textAlign: 'left', fontFamily: 'sans-serif'}}>Sales (USD): </h2>
                                                                </div>
                                                                <div className="col-xl-6">
                                                                    <h2 className="mb-1" style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{option.amnt}  {'USD'}</h2>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', textAlign: 'left', fontFamily: 'sans-serif' }}>Operator Name: </h2>
                                                                </div>
                                                                <div className="col-xl-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{option.username}  </h2>
                                                                </div>
                                                            </div>
                                                           
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', textAlign: 'left', fontFamily: 'sans-serif'}}>Sold Stock: </h2>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{option.quantity}  {'KG'}</h2>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', textAlign: 'left', fontFamily: 'sans-serif' }}>Current Stock Level: </h2>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{closingStock - option.quantity} {'KG'} </h2>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', textAlign: 'left', fontFamily: 'sans-serif' }}>Reoder Level: </h2>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6">
                                                                <h2 className="mb-1" style={{ fontSize: '15px', fontFamily: 'sans-serif' }}>{closingStock} {'KG'} </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="sparkline-revenue"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '83%', float: 'right' }}>
                            <Footer></Footer>
                        </div>
                    </div>
                    <script src="../assets/vendor/jquery/jquery-3.3.1.min.js"></script>
                    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
                    <script src="../assets/vendor/slimscroll/jquery.slimscroll.js"></script>
                    <script src="../assets/libs/js/main-js.js"></script>
                </body>
            </html>
        </div >

    );
}

export default FinDashboard;