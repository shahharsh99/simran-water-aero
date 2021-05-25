import React, { Component } from 'react'

/******************************React-Packages*********************************************/
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
/******************************Login-Action-File*********************************************/
import {fetchLogin} from "../../../Actions/Login/LoginAction"

/**********************************Toastify-Notifications-for-Errors****************************/
import { displayFormErrors } from "../../../util/util"

/**********************************Logo-Image****************************/
import logo from '../../../assets/user2.jpg'


class ChangePassword extends Component{


    constructor(props) {
        super(props);
    }

   
/******************************************************************************
     @Purpose : OnSubmit Function for Login
******************************************************************************/
 onHandleSubmit = (values) => {
    console.log("TCL ~ Login ~ values", values);
    
    const apiVal = {
        strategy: "local",
        email: values.email,
        password: values.password,
    };
   console.log(apiVal)
    this.props.fetchLogin(apiVal).then(() => {
        const { userLoginData, history } = this.props;

    if (userLoginData) {
        history.push("/dashboard");
    }
    });
   };


    render() {
    return (
        <div>
        <div className="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
            {/* <a href="../../index2.html"><b>Admin</b>LTE</a> */}
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <div className="drop-icon">
            <center>
                   {/* <i className="fas fa-tint"  >
                   </i> */}
                   <AiOutlineUser  style={{fontSize:50, color:'grey'}}></AiOutlineUser>
                   {/* <img src={logo} width="50%" height="50% "></img> */}
              </center>
            </div>
            <h2 className="login-box-msg">Admin</h2>
            {/* <center><p>We will send you a instructions to reset password on your registered email ID</p></center> */}
                
            
        {/*********************************Login-Form*****************************************************/}
            <Formik
                enableReinitialize
                initialValues={{ email: ""}}
                onSubmit={this.onHandleSubmit}
            /***************************For-Validations***********************************/
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Email is required"),
                 })}
            >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                submitCount,
                setFieldValue,
                }) => {
                const showError = (key) =>
                    displayFormErrors(key, errors, touched, submitCount);

                return (
                    <React.Fragment>
                        <center>
                            <div  className="container align-items-center" style={{marginTop:"5%"}}>        
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                        <div className="input-group mb-2">
                                        <Field type="text" name="email" className="form-control" placeholder="Enter your Current Password" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            {/* <span className="fas fa-envelope"></span> */}
                                            <AiOutlineUnlock></AiOutlineUnlock>
                                            </div>
                                        </div>
                                        </div>
                                        {errors.email && touched.email && (
                                                <div
                                                style={{ color: "red" }}
                                                className="input-feedback mt-0 mb-2"
                                                >
                                                {errors.email}
                                                </div>
                                            )}  
                                            
                                        <div className="input-group mb-1">
                                        <Field type="text" name="email" className="form-control" placeholder="Enter your New Password" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            {/* <span className="fas fa-envelope"></span> */}
                                            <AiOutlineUnlock></AiOutlineUnlock>
                                            </div>
                                        </div>
                                        </div>
                                        {errors.email && touched.email && (
                                                <div
                                                style={{ color: "red" }}
                                                className="input-feedback mt-0 mb-2"
                                                >
                                                {errors.email}
                                                </div>
                                            )}  
                                          
                                            <div className="input-group mb-3-">
                                        <Field type="text" name="email" className="form-control " placeholder="Enter your Confirm Password" />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                            {/* <span className="fas fa-envelope"></span> */}
                                            <AiOutlineUnlock></AiOutlineUnlock>
                                            </div>
                                        </div>
                                        </div>
                                        {errors.email && touched.email && (
                                                <div
                                                style={{ color: "red" }}
                                                className="input-feedback mt-0 mb-2"
                                                >
                                                {errors.email}
                                                </div>
                                            )}  
                                   
                                    <div className="col-8 mt-2  ">
                                        <button type="submit" className="btn btn-primary btn-block ">Change Password</button><br/>
                                    </div>
                                    </form>
                        </div>
                        </center>
                    </React.Fragment>
                    );
                    }}
                </Formik>
                    <p className="mb-0 text-center">
                        {/* <Link to="/signup" className="text-center">Register a new membership</Link> */}
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                        </div>

                            );
                        }
                    }

const mapStateToProps = (state) => {
    return {
       
    };
    };
    
const mapDispatchToProps = {
    
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);


    