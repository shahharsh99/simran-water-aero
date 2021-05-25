import React, { useEffect } from "react";
import Common from "../../Common/Common"
import { connect } from "react-redux";
import { fetchUpdateStandard } from "../../../Actions/Standard/UpdateStandardAction";
import { fetchStandardDetail } from "../../../Actions/Standard/StandardDetailAction";
import { fetchAddStandard } from "../../../Actions/Standard/AddStandardAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { displayFormErrors } from "../../../util/util";
import { Link } from "react-router-dom";

import * as Yup from "yup";


import { GrDocumentCsv } from "react-icons/gr";



/**********************Schema for validation********************************/
const SignupSchema = Yup.object().shape({
   
    email:Yup.string().email().required("Email Address is required")
  });


export function AddEditRoles(props) {

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
    const apiVal = {
        standard: val.standard,
        fees: val.fees,
    };

    if (!getStandardId()) {
        props.fetchAddStandard(apiVal).then(() => {
            const { addStandardData, history } = props;
            if (addStandardData) {
                history.push("/standard");
            }
    });
} else {
    props.fetchUpdateStandard(apiVal, getStandardId()).then(() => {
        const { updateStandardData, history } = props;
            if (updateStandardData) {
                history.push("/standard");
            }
    });
}
};
    return (

            <Common>
        <div>

            <div>
            <section className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1>Add Roles</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/role">RoleManagement</Link></li>
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
                                    <center>
                                            <div className="card-body  col-lg-6">
                                                
                                                <div className="col-lg-12">
                                                   
                                                   <div className="form-group">
                                                       <label htmlFor="standard">Email ID</label>
                                                       <Field type="email" name="email" className="form-control"  placeholder="Email ID" />
                                                       {errors.email && touched.email && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.email}
                                                            </div>
                                                        )} 
                                                   </div>
                                            
                                                </div>
                                                    <div className="col-lg-12">
                                                        
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Modules</label>
                                                          {/* Dashboard */}
                                                            <div className="col-lg-12 row ml-5">
                                                                <div className="col-lg-3 mt-2 "> 
                                                                    <label>Dashboard</label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = " "  className="mt-3"/>All
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3" >
                                                                        <input type="checkbox" value="" className="mt-3" />Add
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Edit 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />View 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Delete   
                                                                    </label>
                                                            
                                                                </div>
                                                            </div>
                                                        {/* Master Data */}
                                                            <div className="col-lg-12 row ml-5">
                                                                <div className="col-lg-3 mt-2 "> 
                                                                 <label>Master Data</label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = " "  className="mt-3"/>All
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3" >
                                                                        <input type="checkbox" value="" className="mt-3" />Add
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Edit 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />View 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Delete   
                                                                    </label>
                                                            
                                                                </div>
                                                            </div>
                                                        {/* Customer Management */}
                                                            <div className="col-lg-12 row ml-5">
                                                                <div className="col-lg-3 mt-2 "> 
                                                                 <label>Customer Management</label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = " "  className="mt-3"/>All
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3" >
                                                                        <input type="checkbox" value="" className="mt-3" />Add
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Edit 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />View 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Delete   
                                                                    </label>
                                                            
                                                                </div>
                                                            </div>
                                                        {/* Role Management */}
                                                            <div className="col-lg-12 row ml-5">
                                                                <div className="col-lg-3 mt-2 "> 
                                                                 <label>Role Management</label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = " "  className="mt-3"/>All
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3" >
                                                                        <input type="checkbox" value="" className="mt-3" />Add
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Edit 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />View 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Delete   
                                                                    </label>
                                                            
                                                                </div>
                                                            </div>
                                                     {/* View Audit Log */}
                                                            <div className="col-lg-12 row ml-5">
                                                                <div className="col-lg-3 mt-2 "> 
                                                                 <label>View Audit Log</label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = " "  className="mt-3"/>All
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3" >
                                                                        <input type="checkbox" value="" className="mt-3" />Add
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Edit 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />View 
                                                                        </label>
                                                                        <label class = "checkbox-inline mr-3">
                                                                        <input type = "checkbox" value = "" className="mt-3" />Delete   
                                                                    </label>
                                                            
                                                                </div>
                                                            </div>
                                                               
                                                            {/* <div className="col-lg-3">
                                                                <label>Dashboard</label>
                                                            </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">All</label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">Add</label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        Edit
                                                                    </label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        View
                                                                    </label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        Delete
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                <label>Dashboard</label>
                                                            </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">All</label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">Add</label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        Edit
                                                                    </label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        View
                                                                    </label>
                                                                </div>
                                                                <div class="custom-control custom-checkbox mr-3">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                    <label class="custom-control-label" for="customCheck2">
                                                                        Delete
                                                                    </label>
                                                                </div> */}
                                                           
                                                            
                                                        </div>
                                                
                                                    </div>
                                                    
                                                    
                                                    <div className=" text-center">
                                                        <button type="submit" className="btn btn-secondary">Invite User</button>
                                                    </div>

                                            </div>
                                        {/* <div className="w-25 text-center mt-3">
                                            <button type="submit" className="btn btn-primary">  
                                            {getStandardId() ? "Update" : "Add"}
                                            </button>
                                        </div> */}
                                                </center>

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

export default connect(mapStateToProps, mapDispatchToProps)(AddEditRoles);
