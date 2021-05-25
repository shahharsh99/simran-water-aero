import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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


const AuthRoute = () => {
return (
    <main className="c-main">
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

        <Redirect from="/" to="/dashboard" />
    </Switch>
    </main>
);
};

export default React.memo(AuthRoute);