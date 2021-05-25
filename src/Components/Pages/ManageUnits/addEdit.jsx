import React, { useEffect } from "react";
import Common from "../../Common/Common"
import { connect } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { displayFormErrors } from "../../../util/util";
import { Link } from "react-router-dom";

import * as Yup from "yup";

/**********************React Icons********************************/
import { GrDocumentCsv } from "react-icons/gr";


/**********************Schema For Validation********************************/
const SignupSchema = Yup.object().shape({
    serialno: Yup.string()
      .required('Pre-Serial No is Required'),
    aircraftno: Yup.string()
      .required('Aircraft Number is Required'),
      airlineCarrier: Yup.string()
      .required('Airline Carrier is Required'),
    
  });



export function AddEditUnit(props) {

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
                    <h1>Add Unit</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/manageunit">ManageUnit</Link></li>
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
                                                       <label htmlFor="standard">Pre-Select Serial No</label>
                                                       <Field type="text" name="serialno" className="form-control"  placeholder="Pre-Select Serial No" />
                                                        
                                                   </div>
                                                   
                                                    </div>
                                                    {errors.serialno && touched.serialno && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.serialno}
                                                            </div>
                                                        )} 
                                            
                                                    <div className="col-lg-12">
                                                        
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Aircraft No</label>
                                                            <Field type="text" name="aircraftno" className="form-control"  placeholder="Aircraft No" />
                                                          
                                                        </div>
                                                
                                                    </div>
                                                    {errors.aircraftno && touched.aircraftno && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.aircraftno}
                                                            </div>
                                                        )} 
                                                    <div className="col-lg-12">
                                                        
                                                        <div className="form-group">
                                                            <label htmlFor="standard">Airline-Carrier</label>
                                                            <Field type="text" name="airlineCarrier" className="form-control"  placeholder="Airline-Carrier" />
                                                           
                                                        </div>
                                                
                                                    </div>
                                                    {errors.airlineCarrier && touched.airlineCarrier && (
                                                            <div
                                                            style={{ color: "red" }}
                                                            className="input-feedback mt-0 mb-2"
                                                            >
                                                            {errors.airlineCarrier}
                                                            </div>
                                                        )} 
                                                    
                                                    <div className=" text-center">
                                                        <button type="submit" className="btn btn-secondary">Add Unit</button>
                                                    </div>

                                                    <p>OR</p>

                                                    <div className="text-center">
                                                        
                                                        <button type="submit" className="btn btn-secondary"> <GrDocumentCsv className="mr-1"></GrDocumentCsv> Import through CSV</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEditUnit);
