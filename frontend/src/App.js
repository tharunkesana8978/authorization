import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";

import Dashboard from "./components/Admin/Dashboard";
import EmployeeList from "./components/Admin/EmployeeList";




function App() {
    return (
        <Router>
            <Routes>

                <Route path="/Login" element={<Login />} />

                
            <Route path="/" element={<Register />} />

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/employees" element={<EmployeeList />} />

            </Routes>
        </Router>
    );
}

export default App;
