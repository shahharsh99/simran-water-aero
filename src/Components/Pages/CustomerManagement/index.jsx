import Common from '../../Common/Common'

/***************************React Components*******************************************/
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';


import AddIcon from '@material-ui/icons/Add';

/***************************React Icons*******************************************/
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { AiOutlineFolderView } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";

/***************************Style Files*******************************************/
import './style.css'

function CustomerManagement(props) {


    useEffect(() => {
        
    },props);

   
/***************************Columns for customers Datatable*******************************************/
    const columns = [
            {
                name: "Customer ID",
                selector: "customerId",
                sortable: true
            },
            {
                name: "First Name",
                selector: "fname",
                sortable: true
            },
            {
                name: "Last Name",
                selector: "lname",
                sortable: true
            },
            {
                name: "Airline-Carrier",
                selector: "airlineCarrier",
                sortable: true
            },
            {
                name: "Address",
                selector: "address",
                sortable: true
            },
            {
                name: "Country",
                selector: "country",
                sortable: true
            },
            {
                name: "State",
                selector: "state",
                sortable: true
            },
            {
                name: "City",
                selector: "city",
                sortable: true
            },
            {
                name: "Actions",
                cell: row => <div className="row ">
                               
                                 <button className="actionButton   btn btn-warning btn-sm p-2 mr-2  "  >
                                    <AiFillEdit></AiFillEdit>
                                 </button>
                                 <button className="actionButton btn btn-primary btn-sm p-2 mr-2  ">
                                    <AiFillEye></AiFillEye>
                                 </button>   
                                 <button className="actionButton btn btn-danger btn-sm p-2 ">
                                    <RiDeleteBin6Line></RiDeleteBin6Line>
                                 </button>
                            </div>,
            },
       
        ];

/***************************Data for customers Datatable*******************************************/
    const data = [
            {
                "customerId":1,
                "fname":"Allan",
                "lname":"Patterson",
                "airlineCarrier":"Air Asia",
                "address":"Lorem ipsum",
                "country":"Lorem ipsum",
                "state":"Lorem ipsum",
                "city":"Lorem ipsum"
            }
        ]

return (
    <Common title="standard">
        <div>
            <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                {/* <h1 className="m-0">Customer</h1> */}
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                    <li className="breadcrumb-item active">Customer</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        </div>
        <div>
        <section className="content">
            <div className="container-fluid">
         {/* Customers-Datatable */}
            <DataTable
                        title= "Customers"
                        actions={
                           <Link to="/addCustomer" className="m-3">
                               {/* <Fab size="small" aria-label="add"><AddIcon /></Fab> */}
                               <button className="btn btn-info"><AddIcon /></button>  
                            </Link>
                        }
                        striped
                        columns={columns}
                        data={data}
                        defaultSortField="standard"
                        // sortIcon={<SortIcon />}
                        sortable
                        pagination
                        highlightOnHover
                        responsive
                        // selectableRows
                        // onSelectedRowsChange={handleChange}
                        />
            </div>
        </section>
        </div>
    </Common>
    )
}


const mapStateToProps = (state) => {
return {

};
};

const mapDispatchToProps = {
 
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManagement);






