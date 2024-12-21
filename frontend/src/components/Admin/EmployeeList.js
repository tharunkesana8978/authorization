import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import './EmployeeList.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const { data } = await API.get("/admin/employees");
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        try {
            await API.delete(`/admin/employees/${id}`);
            alert("Employee deleted successfully!");
            setEmployees(employees.filter((emp) => emp._id !== id));
        } catch (error) {
            alert("Failed to delete employee.");
        }
    };

    return (
        <div className="container">
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp._id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.role}</td>
                            <td>{emp.department}</td>
                            <td>
                                <button onClick={() => navigate(`/admin/employees/edit/${emp._id}`)}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(emp._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
