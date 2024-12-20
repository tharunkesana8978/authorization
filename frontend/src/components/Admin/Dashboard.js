import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/admin/employees">Manage Employees</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminDashboard;