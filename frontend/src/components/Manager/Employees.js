import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import "./Employees.css"
const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await API.get("/manager/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div className="employees">
      <h2>Department Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id} className="employee-card">
            <p><strong>ID:</strong> {employee._id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Department:</strong> {employee.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
