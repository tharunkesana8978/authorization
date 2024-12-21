import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import './EditEmployee.css';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        role: "",
        department: "",
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const { data } = await API.get(`/admin/employees/${id}`);
                setEmployeeData(data);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.put(`/admin/employees/${id}`, employeeData);
            alert("Employee updated successfully!");
            navigate("/admin/employees");
        } catch (error) {
            console.error("Error updating employee:", error);
            alert("Failed to update employee.");
        }
    };

    return (
        <div className="container">
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={employeeData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={employeeData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={employeeData.role}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employeeData.department}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;
