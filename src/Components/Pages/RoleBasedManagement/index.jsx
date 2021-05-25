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




function RoleManagement(props) {


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
                name: "Email ID",
                selector: "emailid",
                sortable: true
            },
            {
                name: "Role Creation Date",
                selector: "date",
                sortable: true
            },
            {
                name: "Actions",
                cell: row => <div className="row">
                               
                                 <button className="btn btn-warning btn-sm p-2 mr-2 ">
                                    <AiFillEdit></AiFillEdit>
                                 </button>
                                 <button className="btn btn-primary btn-sm p-2 mr-2">
                                    <AiFillEye></AiFillEye>
                                 </button>   
                                 <button className="btn btn-danger btn-sm p-2">
                                    <RiDeleteBin6Line></RiDeleteBin6Line>
                                 </button>
                            </div>,
            },
     
        ];

/**********************Data for Datatables********************************/
        const data = [
            {
               "emailid":"allan12@gmail.com",
               "date":"26-04-2021",
               
            },
            {
                "emailid":"allan12@gmail.com",
                "date":"26-04-2021",
                
             },
             {
                "emailid":"allan12@gmail.com",
                "date":"26-04-2021",
                
             },
             {
                "emailid":"allan12@gmail.com",
                "date":"26-04-2021",
                
             },
             {
                "emailid":"allan12@gmail.com",
                "date":"26-04-2021",
                
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
                    <li className="breadcrumb-item active">RoleManagement</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
        </div>
        <div>
        <section className="content">
            <div className="container-fluid">
           
            <DataTable
                        title= "Role Management"
                        actions={

                        <>
                           <button  
                              className="btn btn-primary"
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

                           <Link to="/addeditRole" className="m-3">
                                {/* <Fab size="small" aria-label="add"><AddIcon /></Fab> */}
                               <button className="btn btn-info"><AddIcon /></button>
                            </Link>

                        </>                    
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

export default connect(mapStateToProps, mapDispatchToProps)(RoleManagement);






