import Common from '../../Common/Common'
import React, {useEffect} from 'react'
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { fetchStandardList } from "../../../Actions/Standard/StandardListAction"
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {CBadge} from '@coreui/react'
import { fetchUpdateStandard } from "../../../Actions/Standard/UpdateStandardAction";
import { fetchDeleteStandard } from '../../../Actions/Standard/DeleteStandardAction'
import bootbox from 'bootbox/bootbox';


/**************************Style Files****************************/
import './style.css'

/**************************React-Icons****************************/
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { AiOutlineFolderView } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { MdPictureAsPdf } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";

/**************************Excel-React-PAckage****************************/
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

/**************************PDF-React-PAckage****************************/
import jsPDF from 'jspdf'




function Logs(props) {


    useEffect(() => {
        
    },props);

    
/******************************************************************************
     @Purpose : PDF Generate Function
******************************************************************************/    
function jsPdfGenerator(){
       
    /**********************New Document pdf********************************/
     var doc = new jsPDF('p','pt')

    /**********************Add Text to pdf********************************/
     doc.text(20,20, 'Hello')

    /**********************Save Document in pdf format********************************/
    doc.save("generated.pdf")
 }

 /******************************************************************************
 @Purpose : Excel Generator Function
******************************************************************************/
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const fileExtension = '.xlsx';

const  exportToCSV = () => {
    
    const csvData = [
        {
            id:1,
            "Name":"Simran Kaur",
            "Position":"ReactJS Developer"
        },
        {
           id:2,
           "Name":"Aagam Shah",
           "Position":"NodeJS Developer"
       },
       {
           id:3,
           "Name":"Harsh Shah",
           "Position":"ReactJS Developer"
       },
       {
           id:4,
           "Name":"Naitik Vora",
           "Position":"ReactJS Developer"
       }
    ]

    const fileName = 'Test'
    const ws = XLSX.utils.json_to_sheet(csvData);

    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], {type: fileType});

    FileSaver.saveAs(data, fileName + fileExtension);

}



   
/**********************Column for Datatables********************************/
        const columns = [
            {
                name: "Customer ID",
                selector: "customerId",
                sortable: true
            },
            {
                name: "Customer Name",
                selector: "cName",
                sortable: true
            },
           
            {
                name: "Airline-Carrier",
                selector: "airlineCarrier",
                sortable: true
            },
            {
                name: "Date-Time",
                selector: "dateTime",
                sortable: true
            },
            {
                name: "Activity",
                selector: "activity",
                sortable: true
            },
           
        ];

/**********************data for Datatables********************************/
        const data = [
            {
                "customerId":1,
                "cName":"Allan Patterson",
                "airlineCarrier":"Air Asia",
                "dateTime":"27-04-2021 12:03:21",
                "activity":"Changed Username",
               
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
                    <li className="breadcrumb-item active">Logs</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        </div>
        <div>
        <section className="content">
            <div className="container-fluid">
            <div className="card">
            <div className="col-lg-12 row mt-3">
                <div className="col-lg-3 "> 
                    <center><p>Select Airline-Carrier</p></center>
                    <div className="form-group"> 
                    <select class="form-select form-control" aria-label="Default select example">
                        <option selected>Air Asia</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                   </select>
                    </div>
                </div>
                <div className="col-lg-3"> 
                    <center><p>Select User Type</p></center>
                    <div className="form-group"> 
                    <select class="form-select form-control" aria-label="Default select example">
                        <option selected>Customer</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                   </select>
                    </div>
                </div>
                
                <div className="col-lg-4"> 
                <div > 
                  <div className="float-right row mt-4 files">
                 
                    <button  
                        className="btn btn-primary mr-2"
                        onClick={jsPdfGenerator}
                        >
                        <MdPictureAsPdf></MdPictureAsPdf>
                    </button>
                    <button 
                        className="btn btn-success" 
                        onClick={(e) => exportToCSV()}
                        
                    >
                        <RiFileExcel2Line></RiFileExcel2Line>
                    </button>

                    {/* <Link to="/addeditRole" className="m-3"><Fab size="small" aria-label="add"><AddIcon /></Fab></Link> */}

                                

                  </div>
                </div>
                </div>
            </div>
            </div>
            <DataTable
                        title= "Logs"
                        // actions={<Link to="/addCustomer" className="m-3"><Fab size="small" aria-label="add"><AddIcon /></Fab></Link>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Logs);






