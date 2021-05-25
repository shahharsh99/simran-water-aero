    import React from 'react'
    import { Link, useHistory } from 'react-router-dom'

    /********************Style-File***********************************/
    import './adminlte.min.css'

    /*******************Confirmation-Box**************************/
    import bootbox from 'bootbox/bootbox';

    /*******************Images**************************/
    import logo from '../../assets/logo.png'
    import user from '../../assets/user.png'
    import user2 from '../../assets/user2.jpg'

    /*******************React-Icons**************************/
    import { BiUnite } from "react-icons/bi";
    // import { ImUsers } from "react-icons/hi";
    import { HiOutlineViewList } from "react-icons/hi";
    import { ImUsers } from "react-icons/im";
    import { FaUserEdit } from "react-icons/fa";


    /******************Bootstrap-File**************************/
    import 'bootstrap/dist/js/bootstrap.bundle';
  
    export default function Common(props) {
        const history = useHistory();
      
    /******************************************************************************
         @Purpose : Logout Function
    ******************************************************************************/ 
         function handleLogOut(){
            localStorage.removeItem("userAccessToken")
            history.push("/signin")
        } 
    // function handleLogOut(){
    //     {bootbox.confirm({
    //         message: "Are you sure to logout ?",
    //         buttons: {
    //             confirm: {
    //                 label: 'Yes',
    //                 className: 'btn-sm btn-success'
    //             },
    //             cancel: {
    //                 label: 'No',
    //                 className: 'btn-sm btn-danger'
    //             }
    //         },
    //         callback: function (result) {
                
    //         }
    //             }).css({
    //                     'margin-top': '12%'
    //                     }
    //         );}
    //         }
        return (
            <div>
                <div>
                    <div className="wrapper">
                        
                        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            {/* <Link to="/login" class="nav-link">
                                     <button className="btn btn-default">Logout</button>
                            </Link> */}
                                 <div class="dropdown">
                                <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                     <FaUserEdit></FaUserEdit>
                                </button>
                                <div class="dropdown-menu">
                                    <Link to="/changePassword" class="nav-link dropdown-item">
                                        <button className="btn btn-default">Forget Password</button>
                                    </Link> 
                                
                                <div class="dropdown-divider"></div>
                                   <Link to="/login" class="nav-link dropdown-item">
                                        <button className="btn btn-default">Logout</button>
                                    </Link>

                                </div>
                            </div>
                            </li>

                        </ul>
                                {/* <a className="btn btn-secondary">Log Out</a> */}

                        <ul class="navbar-nav mb-1 mr-5">
                       {/* <li class="nav-item dropdown" > 
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={user2} width="40" height="40" class="rounded-circle" />
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"  >
                            <a class="dropdown-item" href="#">Change Password</a>
                       
                            <a class="dropdown-item" href="#">Log Out</a>
                            </div>
                          </li>   */}
                          
                         
                       </ul>
                        </nav>
                        <aside className="main-sidebar  elevation-4">
                         <div className="">
                         <img src={logo} alt="AdminLTE Logo" className="ml-3" style={{opacity: '.8'}} width="60%" height="30%" />
                            {/* <span className=" font-weight-light" style={{color:'#1ab6cf'}}>Water.Aero</span> */}
                         </div>
                        <div className="sidebar">
                            <div className="user-panel mt-3 pb-3 d-flex">
                            <div className="image">
                                <img src={user} className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <p className="d-block">Admin </p>
                            </div>
                            </div>
                            
                            <nav className="">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item menu-open">
                                <li class="nav-item">
                                    <Link to="/dashboard  " class="nav-link">
                                      <i className="nav-icon fas fa-tachometer-alt" />
                                        <p >
                                        Dashboard
                                        </p>
                                    </Link>
                                   
                                    </li>
                                    <li class="nav-item ml-1">
                                        <Link to="/masterdata" class="nav-link">
                                        <i class="fas fa-database"></i>
                                            <p className="ml-2">
                                            Master Data
                                            </p>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/customer" class="nav-link">
                                    <i class="fas fa-users"></i>
                                        <p  className="ml-2">
                                         Customer Management
                                        </p>
                                    </Link>
                                    </li>
                                    <li class="nav-item ">
                                        <Link to="/role" class="nav-link">
                                                <ImUsers className="mr-2"></ImUsers>
                                                    <p className="mr-6">
                                                    Role Management
                                                    </p>
                                        </Link>
                                    </li>    
                                    <li class="nav-item">
                                       <Link to="/logs" class="nav-link">
                                                <HiOutlineViewList className="mr-2"></HiOutlineViewList>
                                                    <p className="mr-6">
                                                      View Audit Logs
                                                    </p>
                                        </Link>
                                    </li>
                                      
                                    <li class="nav-item">
                                      <Link to="/manageunit" class="nav-link">
                                                <BiUnite></BiUnite>
                                                    <p  style={{marginLeft:5}}>
                                                      Manage Units
                                                    </p>
                                        </Link>
                                    </li>

                                </li>
                            </ul>
                            </nav>
                        </div>
                        </aside>
                        <div className="content-wrapper">
                        {props.children}
                        {console.log("---",props.children)}
                        </div>
                        {/* Footer */}
                        <footer className="main-footer">
                        <strong>Copyright ©2021 <a href="">Water.Aero</a> | </strong>
                        All rights reserved.
                        <div className="float-right d-none d-sm-inline-block">
                            <b>Version</b> 0.0.1
                        </div>
                        </footer>
                        {/* Control Sidebar */}
                        <aside className="control-sidebar control-sidebar-dark">
                        </aside>
                    </div>
                    </div>


            </div>
        )
    }
