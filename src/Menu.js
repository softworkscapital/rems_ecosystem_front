import React from "react";

const Menu = () => {
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


                    <div style={{ width: '100%' }}>
                        <div class="container-fluid dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                                    <h1 class="text-center">Main Menu</h1><br></br>

                                    <div class='row' style={{ marginLeft: '1%', textAlign: 'center' }}>

                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <a href="/funnel">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="text-muted">REMS</h5>
                                                        <div class="metric-value d-inline-block">
                                                            <h1 class="mb-1">Ticketing </h1>
                                                        </div>
                                                    </div>
                                                    <div id="sparkline-revenue"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <a href="/pos">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="text-muted">REMS</h5>
                                                        <div class="metric-value d-inline-block">
                                                            <h1 class="mb-1">POS </h1>
                                                        </div>
                                                    </div>
                                                    <div id="sparkline-revenue"></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <a href="/findashboard">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="text-muted">REMS</h5>
                                                    <div class="metric-value d-inline-block">
                                                        <h1 class="mb-1">Finance</h1>
                                                    </div>
                                                </div>
                                                <div id="sparkline-revenue"></div>
                                            </div>
                                            </a>
                                        </div>

                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <a href="/login">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="text-muted">REMS</h5>
                                                    <div class="metric-value d-inline-block">
                                                        <h1 class="mb-1">Payroll</h1>
                                                    </div>
                                                </div>
                                                <div id="sparkline-revenue"></div>
                                            </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* <Footer></Footer> */}
                        </div>
                    </div>
                    <script src="../assets/vendor/jquery/jquery-3.3.1.min.js"></script>
                    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
                    <script src="../assets/vendor/slimscroll/jquery.slimscroll.js"></script>
                    <script src="../assets/libs/js/main-js.js"></script>
                </body>

            </html>
        </div>
    );
}

export default Menu;