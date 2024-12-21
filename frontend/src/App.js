import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";

import Dashboard from "./components/Admin/Dashboard";
import EmployeeList from "./components/Admin/EmployeeList";
import EmployeeDashboard from "./components/Employee/Dashboard";
import EmployeeProfile from "./components/Employee/Profile";
import EmployeeAttendance from "./components/Employee/Attendance"
import EmployeeLeave from "./components/Employee/RequestLeave"
import Tasks from "./components/Employee/AssignedTasks";



import ManagerDashboard from "./components/Manager/ManagerDashboard";
import Employees from "./components/Manager/Employees";
import Tasks from "./components/Manager/Tasks";
import LeaveRequests from "./components/Manager/LeaveRequests";



function App() {
    return (
        <Router>
            <Routes>

                <Route path="/Login" element={<Login />} />

                
            <Route path="/" element={<Register />} />

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/employees" element={<EmployeeList />} />
            <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            <Route path="/employee/profile" element={<EmployeeProfile />} />
            <Route path="/employee/attendance" element={<EmployeeAttendance />} />
            <Route path="/employee/leaves" element={<EmployeeLeave />} />
            <Route path="/employee/task" element={<Tasks/>} />

            <Route path="/manager/dashboard" element={<ManagerDashboard />} />
                <Route path="/manager/employees" element={<Employees />} />
                <Route path="/manager/tasks" element={<Tasks />} />
                <Route path="/manager/leaves" element={<LeaveRequests />} />


            </Routes>
        </Router>
    );
}

export default App;
