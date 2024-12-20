import React, { useEffect, useState } from "react";
import API from "../../utils/api";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const { data } = await API.get("/admin/employees");
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

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
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default EmployeeList;