import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import ForgetPassword from "../Components/Pages/ForgetPassword";
import SignIn from "../Components/Pages/SignIn/SignIn";
import AuthRoute from "./AuthRoute";
import Dashboard from "../Components/Pages/Dashboard"
import  AddEditCustomer from "../Components/Pages/CustomerManagement/addEdit"
import CustomerManagement from "../Components/Pages/CustomerManagement";

import MasterData from "../Components/Pages/MasterData";


import ManageUnits from "../Components/Pages/ManageUnits";
import { AddEditUnit } from "../Components/Pages/ManageUnits/addEdit";

import RoleBasedManagement from "../Components/Pages/RoleBasedManagement";
import { AddEditRoles } from "../Components/Pages/RoleBasedManagement/addEdit";
import Logs from "../Components/Pages/Logs";
import ChangePassword from "../Components/Pages/ChangePassword";

// const AutheticateRoute = ({ component: Component, ...rest }) => {
// const authToken = localStorage.getItem("userAccessToken");

// // return (
// //     <Route
// //     {...rest}
// //     render={(props) =>
// //         authToken ? <AuthRoute {...props} /> : <Redirect to="/login" />
// //     }
// //     />
// // );
// };

const Routes = () => {
    return (
//     <Router 
//     //   basename={process.env.PUBLIC_URL}
//       >
//         <Switch>
//             <Route  path="/forgetPassword" component={ForgetPassword}/>
//             <Route exact name = "login" path="/login" component={SignIn}/>
//             <AutheticateRoute
//                 path="/"
//                 name="Login"
//                 render={(props) => <AuthRoute {...props} />}
//             />

//             <Route path="/" render={() => <Redirect to="/login" />} />
//         </Switch>
//     </Router>
        <Switch>

        {/* Change Password */}
        <Route exact path="/changePassword" component={ChangePassword }/>

         {/* Logs */}
         <Route exact path="/logs" component={Logs}/>

         {/* Role Management */}
         <Route exact path="/addeditRole" component={AddEditRoles}/>
        <Route exact path="/role" component={RoleBasedManagement}/>
    
        {/* Manage Units */}
        <Route exact path="/addunit" component={AddEditUnit}/>
        <Route exact path="/manageunit" component={ManageUnits}/>

        {/* Customers Management */}
        <Route exact path="/addCustomer" component={AddEditCustomer}/>
        <Route exact path="/customer" component={CustomerManagement}/>

        {/* Master Data */}
        <Route exact path="/masterdata" component={MasterData}/>

        {/* dashboard */}
        <Route exact path="/dashboard" component={Dashboard}/>

              <Route  path="/forgetPassword" component={ForgetPassword}/>
            <Route exact name = "login" path="/login" component={SignIn}/>

            <Route path="/" render={() => <Redirect to="/login" />} />
    </Switch>
)}

export default Routes;
