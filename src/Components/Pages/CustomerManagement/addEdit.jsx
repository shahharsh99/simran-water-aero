import React, { useEffect } from "react";
import Common from "../../Common/Common"
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { displayFormErrors } from "../../../util/util";
import { Link } from "react-router-dom";

import * as Yup from "yup";

/***************************Schema Validation for form*******************************************/
const SignupSchema = Yup.object().shape({
    fname: Yup.string()
      .required('First Name is Required'),
    lname: Yup.string()
      .required('Last Name is Required'),
    address: Yup.string()
      .required('Address is Required'),
    phone: Yup.number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
      .required('Phone number is Required'),
    airlinecarrier: Yup.string()
      .required('Airline-Carrier is Required'),
    email:Yup.string().email().required("Email Address is required")
  });

  
export function AddEditCustomer(props) {

    function initialValues(){
        const {standardDetailData} = props;
        let detail = standardDetailData
        if(!getStandardId()){
            detail=null
        }

        return {
            standard : detail?.standard || "",
            fees : detail?.fees || "",
        }
    }

    useEffect(() => {
        if(getStandardId()){
            props.fetchStandardDetail(getStandardId())
        }
    },props);

    const getStandardId = () => {
    const { match } = props;
    
    return match?.params?.id || "";
    };

function onHandleSubmit(val){
   console.log(val)
};

    return (

            <Common>
        <div>

            <div>
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Customer</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/customer">Customer</Link></li>
                        <li className="breadcrumb-item active">Add</li>
                    </ol>
                    </div>
                </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card ">
                        <div className="card-header">
                        </div>
                        <Formik
                                enableReinitialize
                                initialValues={initialValues()}
                                onSubmit={onHandleSubmit}
                               
                                validationSchema={SignupSchema}
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
                                        <>                    
                                        {/* <h2 className="text-center mb-4">
                                            {getStandardId() ? "Edit Customer" : "Add Customer"}
                                        </h2> */}
                                    <form onSubmit={handleSubmit} id="quickForm">
                                        <div className="card-body">

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">First Name</label>
                                                            <Field type="text" name="fname" className="form-control"  placeholder="First Name" />
                                                         
                                                        </div>
                                                        {errors.fname && touched.fname && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.fname}
                                                            </div>
                                                        )}  
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Last Name</label>
                                                            <Field type="text" name="lname" className="form-control"  placeholder="Last Name" />
                                                        
                                                        </div>
                                                        {errors.lname && touched.lname && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.lname}
                                                            </div>
                                                        )}  
                                                        <br/>
                                                    </div>
                                                    
                                                </div>
                                                <div className="row">
                                                <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Address</label>
                                                            <Field type="text" name="address" className="form-control"  placeholder="Address" />
                                                         
                                                        </div>
                                                        {errors.address && touched.address && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.address}
                                                            </div>
                                                        )}  
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Email Address</label>
                                                            <Field type="email" name="email" className="form-control"  placeholder="Email Address" />
                                                        
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
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div className="row">
                                                    <div className="col">
                                                    <div className="form-group">
                                                                <label htmlFor="standard">Airline - Carrier</label>
                                                                <Field type="text" name="airlinecarrier" className="form-control"  placeholder="Airline-Carrier" />
                                                            
                                                            </div>
                                                            {errors.airlinecarrier && touched.airlinecarrier && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.airlinecarrier}
                                                            </div>
                                                        )} 
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Phone</label>
                                                            {/* <div className="row col-lg-6">
                                                            
                                                            <select class="form-select form-control" aria-label="Default select example">
                                                                    <option selected>+91</option>
                                                                    <option value="1">One</option>
                                                                  
                                                            </select>
                                                            </div> */}
                                                            <div class="phone-list">
				
                                                                <div class="input-group phone-input">
                                                                    <span class="input-group-btn">
                                                                    <select class="form-select form-control" aria-label="Default select example">
                                                                                                                    <option selected>+91</option>
                                                                                                                    <option value="1">One</option>
                                                                                                                
                                                                                                            </select>
                                                                    </span>
                                                                    {/* <input type="hidden" name="phone[1][type]" class="type-input" value="" /> */}
                                                                    {/* <input type="text" name="phone" class="form-control" placeholder="(999) 999 9999" /> */}
                                                            <Field type="number" name="phone" className="form-control"  placeholder="Phone" />
   
                                                                </div>
                
                                                            </div>
                                                        </div>
                                                        {errors.phone && touched.phone && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.phone}
                                                            </div>
                                                        )}  
                                                    </div>
                                                    
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Country</label>
                                                            
                                                            <select class="form-select form-control" aria-label="Default select example">
                                                                    <option selected>Country</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                            </select>
                                                  </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">State</label>
                                                            <select class="form-select form-control" aria-label="Default select example">
                                                                    <option selected>State</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">City</label>
                                                           
                                                            <select class="form-select form-control" aria-label="Default select example">
                                                                    <option selected>City </option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Zip</label>
                                                            <Field type="text" name="zip" className="form-control"  placeholder="Zip" />
                                                        
                                                        </div>
                                                    </div> 
                                                </div>
                                                
                                                <div className="card-footer text-center">
                                                        <button type="submit" className="btn btn-primary">Add Customer</button>
                                                    </div>

                                            </div>
                                   
                                    </form>
                                
                                    </>
                                );
                            }}
                            </Formik>
                           
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>

        </div>
        </Common>

    );

}

const mapStateToProps = (state) => {
return {
   
};
};

const mapDispatchToProps = {
    

};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditCustomer);
