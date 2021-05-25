import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Common from "../../Common/Common"
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

/**************************Style <Files-36> </Files-36>****************************/
import './style.css'

/**************************React-Icons****************************/
import { MdPictureAsPdf } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";

/**************************Excel-React-PAckage****************************/
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

/**************************PDF-React-PAckage****************************/
import jsPDF from 'jspdf'


function MasterData(props) {
        
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

  
    return (
        <Common title="dashboard">
        {/* BreadCrunb */}
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <h1 className="m-0">Master Data</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Master Data</li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
 
        {/* Main content */}
        <section className="content">
            <div className="container-fluid">
          {/* Top Card */}
            <div className="card">
                <div className="col-lg-12 row mt-3">
                    {/* Select Airline Carrier Dropdown*/}
                        <div className="col-lg-3"> 
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

                    {/* Select Aircraft Number DropDown */}
                        <div className="col-lg-3"> 
                            <center><p>Select Aircraft Number</p></center>
                            <div className="form-group"> 
                            <select class="form-select form-control" aria-label="Default select example">
                                <option selected>1234</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>

                    {/* Pre Select Serial Number Dropdown*/}
                        <div className="col-lg-3"> 
                            <center><p>Pre-Select Serial No</p></center>
                            <div className="form-group"> 
                            <select class="form-select form-control" aria-label="Default select example">
                                <option selected>1234</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                        </div>
                    {/* PDF-Generator && Excel-Generator */}
                        <div className="col-lg-3"> 
                        <div className="float-right row mt-2 files ">
                        
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

                          </div>
                        </div>
                </div>
            </div>
            {/* Main Data - Table */}
            <div className="card">
                <div class="table-responsive">
                    <table className="table table-bordered table-responsive table-fixed  ">
                        <thead>
                           <tr>
                                <th scope="col" colspan="8">#</th>
                                <th scope="col" colspan="5" >City-TakeOff</th>
                                <th scope="col" colspan="5"  >City-Landed</th>
                                <th scope="col" colspan="3"  >#</th>
                            </tr>    
                        <tr>
                            <th scope="col">Date Upload Time Stamp</th>
                            <th scope="col">Pre-Select Serial Number</th>
                            <th scope="col">GSM Carrier</th>
                            <th scope="col">AirCraft Number</th>
                            <th scope="col">Airline Carrier Number</th>
                            <th scope="col">Usable Tank Capacity</th>
                            <th scope="col">Target Mode</th>
                            <th scope="col">Static Target</th>
                            <th scope="col">Park Brake Off - City Name</th>
                            <th scope="col">Park Brake Off Time</th>
                            <th scope="col">Park Brake Off - Target(%)</th>
                            <th scope="col">Park Brake Off - Target Start of Filling(%)</th>
                            <th scope="col">Park Brake Off - Water Quantity(%)</th>
                            <th scope="col">Park Brake On - City Name</th>
                            <th scope="col">Park Brake On Time</th>
                            <th scope="col">Park Brake On - Target(%)</th>
                            <th scope="col">Park Brake On - Target Start of Filling(%)</th>
                            <th scope="col">Park Brake On - Water Quantity(%)</th>
                            <th scope="col">Tank fill time(s)</th>
                            <th scope="col">Unit time(s)</th>
                            <th scope="col">Screen time(s)</th>
                        </tr>
                                    
                        </thead>
                        <tbody>
                        <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                            </tr>
                            <tr>
                                <td>2021-04-26 14:19:21</td>
                                <td>1234</td>
                                <td>Rogers Wireless</td>
                                <td>1234</td>
                                <td>Air ASia</td>
                                <td>1234</td>
                                <td>0</td>
                                <td>60</td>
                                <td>Banglore</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>Delhi</td>
                                <td>2021-04-26 14:19:21</td>
                                <td>60</td>
                                <td>0</td>
                                <td>23</td>
                                <td>0</td>
                                <td>62721</td>
                                <td>62721</td>
                                </tr>
                           </tbody>
                      </table> 
                  </div>
              </div>   
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

export default connect(mapStateToProps, mapDispatchToProps)(MasterData);