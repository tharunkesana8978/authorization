import React from "react";
import { Link } from "react-router-dom";
import "./ManagerDashboard.css";

const ManagerDashboard = () => {
  return (
    <div className="manager-dashboard">
      <h1>Manager Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/manager/employees">Employees</Link></li>
          <li><Link to="/manager/tasks">Assign Tasks</Link></li>
          <li><Link to="/manager/leaves">Manage Leave Requests</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ManagerDashboard;
