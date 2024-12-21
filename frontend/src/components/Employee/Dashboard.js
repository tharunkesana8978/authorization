import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const EmployeeDashboard = () => {
    return (
        <div className="employee-dashboard">
            <h1>Employee Dashboard</h1>
            <nav className="employee-nav">
                <ul>
                    <li>
                        <Link to="/employee/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/employee/attendance">Attendance</Link>
                    </li>
                    <li>
                        <Link to="/employee/leaves">Leave</Link>
                    </li>
                    <li>
                        <Link to="/employee/task">Task</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default EmployeeDashboard;
