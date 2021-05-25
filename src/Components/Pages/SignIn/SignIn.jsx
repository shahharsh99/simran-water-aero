import React, { Component } from 'react'

/******************************React-Packages*********************************************/
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

/******************************Login-Action-File*********************************************/
import {fetchLogin} from "../../../Actions/Login/LoginAction"

/**********************************Toastify-Notifications-for-Errors****************************/
import { displayFormErrors } from "../../../util/util"

/**********************************Logo-Image****************************/
import logo from '../../../assets/logo.png'

class SignIn extends Component{


    constructor(props) {
        super(props);
    }

   
/******************************************************************************
     @Purpose : OnSubmit Function for Login
******************************************************************************/
 onHandleSubmit = (values) => {
    console.log("TCL ~ Login ~ values", values);
    const { userLoginData, history } = this.props;
    history.push("/dashboard");
    
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
                   {/* <i className="fas fa-tint" style={{fontSize:50, color:'#46d5e0'}} >
                   </i> */}
                   <img src={logo} width="50%" height="50% "></img>
              </center>
            </div>
            <h2 className="login-box-msg">Login</h2>
        {/*********************************Login-Form*****************************************************/}
            <Formik
                enableReinitialize
                initialValues={{ email: "", password: "" }}
                onSubmit={this.onHandleSubmit}
            /***************************For-Validations***********************************/
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Email is required"),
                    password: Yup.string()
                        .required("Password is required")
                        .min(6, "Password is too short - should be 6 chars minimum.")})}
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
                            <div  className="container align-items-center" style={{marginTop:"8%"}}>        
                                    <form onSubmit={handleSubmit} className="needs-validation">
                                    <div className="input-group mb-1">
                                    <Field type="email" name="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
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
                                            <br/>
                                    <div className="input-group">
                                    <Field type="password" className="form-control"  name="password" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                    </div>
                                    {errors.password && touched.password && (
                                                <div
                                                style={{ color: "red" }}
                                                className="input-feedback mt-0 mb-2"
                                                >
                                                {errors.password}
                                                </div>
                                            )}
                                            <br/>
                                            <label>
                                            <input type="checkbox"  name="remember" /> Remember me
                                            </label>
                                            <br></br>
                                            <span class="psw">Forgot
                                              {/* <a href="#">password?</a> */}
                                              <Link to="/forgetPassword">
                                                Password
                                              </Link>
                                            </span>
                                    <div className="col-8 mt-2  ">
                                        <button type="submit" className="btn btn-primary btn-block ">Login</button><br/>
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
        userLoginLoading: state.userLogin?.isLoading,
        userLoginData: state.userLogin?.data || null,
        userLoginError: state.userLogin?.error || {},
    };
    };
    
const mapDispatchToProps = {
        fetchLogin,
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


    