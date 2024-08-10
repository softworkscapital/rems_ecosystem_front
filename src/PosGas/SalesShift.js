import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import TopNav from "../TopNav";
import Footer from "../Footer";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const SalesShift = () => {

    const [accounts, setAccounts] = useState([])
    const [branch_id, setBranchId] = useState('11')
    const [company_id, setCompanyId] = useState('4')

    useEffect(() => {
        fetch(`${API_URL}/saleshift/${branch_id}/${company_id}`).then(res => {
            return res.json()
        }).then(resp => {
            setAccounts(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])


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

                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="page-header">
                                            <h2 class="pageheader-title">Sales Shifts</h2>

                                            <div class="page-breadcrumb">
                                                <nav aria-label="breadcrumb">
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="card">
                                            <h5 class="card-header" style={{ fontFamily: 'sans-serif' }}>Sales Shifts </h5>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-bordered first">
                                                        <thead>
                                                            <tr>
                                                                <th>Shift-ID</th>
                                                                <th>Shift Open Date</th>
                                                                <th>Shift Information</th>
                                                                <th></th>
                                                                <th>Rate USD</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                accounts.map((item) => (
                                                                    <tr key={item.sales_shifts_id}>
                                                                        <td>{item.sales_shifts_id}</td>
                                                                        <td>
                                                                            {item.operator}<br></br>
                                                                            {item.branch}<br></br>
                                                                            Shift Closed {dateFormat(item.shift_close_date, "yyyy-mm-dd")}{item.shift_close_time || 'N/A'}<br></br>
                                                                            Shift Opened {dateFormat(item.shift_open_date, "yyyy-mm-dd")}{item.shift_open_time || 'N/A'}
                                                                        </td>
                                                                        <td>

                                                                            <div className="row">
                                                                                <div className="col-xl-6 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Transactions
                                                                                </div>
                                                                                <div className="col-xl-6 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.total_transactions} KGS
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-6 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Uncollected Close
                                                                                </div>
                                                                                <div className="col-xl-6 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.bd_uncollected_inventory} KGS
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-6 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Uncollected Mvt
                                                                                </div>
                                                                                <div className="col-xl-6 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.collected_net_movement} KGS
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="row">
                                                                                <div className="col-xl-5 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Open
                                                                                </div>
                                                                                <div className="col-xl-7 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.opening_inventory} KGS
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-5 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Sold
                                                                                </div>
                                                                                <div className="col-xl-7 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.sold_inventory} KGS
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-5 col-lg-6 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 11, textAlign: 'left' }}>
                                                                                    Closing
                                                                                </div>
                                                                                <div className="col-xl-7 col-lg-6 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    {item.closing_inventory} KGS
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <div className="row">
                                                                                <div className="col-xl-7 col-lg-7 col-md-7 col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    $ {item.tendered_cas}
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 10, textAlign: 'left' }}>
                                                                                    ZIG
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-7 col-lg-7 col-md-7  col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    $ {item.tendered_eco}
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 10, textAlign: 'left' }}>
                                                                                    ECO
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-7 col-lg-7 col-md-7  col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    $ {item.tendered_zpt}
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 10, textAlign: 'left' }}>
                                                                                    ZPT
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-7 col-lg-7 col-md-7  col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    $ {item.tendered_usd}
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 10, textAlign: 'left' }}>
                                                                                    USD
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-xl-7 col-lg-7 col-md-7  col-xs-12 col-xm-12" style={{ textAlign: 'right' }}>
                                                                                    R {item.tendered_zar}
                                                                                </div>
                                                                                <div className="col-xl-5 col-lg-5 col-md-5 col-xs-12 col-xm-12" style={{ fontSize: 10, textAlign: 'left' }}>
                                                                                    ZAR
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        {/* <td>{item.rate_usd || 0}</td>
                                                                        <td>{item.cd_uncollected_inventory || 0}</td> */}
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default SalesShift;