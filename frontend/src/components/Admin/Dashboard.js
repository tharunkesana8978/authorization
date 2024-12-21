import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/admin/employees">Manage Employees</Link>
                </li>
                <li>
                    <Link to="/admin/AddEmployee">Add Employee</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
