import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from "./Create";
import Select from "./Select";
import Update from "./Update";
import Logout from "./Logout";
import Home from "./Home";
import CompanyLogin from './Login/CompanyLogin';
import CompanyRegister from './Register/CompanyRegister';
import UserRegister from './Register/UserRegister';
import Nav from "./Nav";
import UserLogin from './Login/UserLogin';
import CreateJob from './CreateJob';
import Posts from './Posts';
import Job from './job';
import Apply from './Apply';
import UserHistory from './UserHistory';
import Rejected from './Rejected';
import Selected from './selected';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Rejected/:company_name/:job_profile/:_id" element={<Rejected/>}></Route>
                <Route path="/Selected/:company_name/:job_profile/:_id" element={<Selected/>}></Route> 
                <Route path="/userHistory" element={<UserHistory />}></Route>
                <Route path="/Apply/:_id" element={<Apply />}></Route>
                <Route path="/job" element={<Job />}></Route>
                <Route path="/Create/*" element={<Create />}></Route>
                <Route path="/jobposts/:company_name/*" element={<Posts />}></Route>
                <Route path="/CreateJob/*" element={<CreateJob />}></Route>
                <Route path="/login" element={<UserLogin />}></Route>
                <Route path="/companylogin" element={<CompanyLogin />}></Route>
                <Route path="/Register" element={<UserRegister />}></Route>
                <Route path="/RegisterCompany" element={<CompanyRegister />}></Route>
                <Route path="/select" element={<Select />}></Route>
                <Route path="/Logout" element={<Logout />}></Route>
                <Route path="/update/:_id" element={<Update />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;