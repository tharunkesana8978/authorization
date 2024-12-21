import React, { useState } from "react";
import API from "../../utils/api";


const AddEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        role: "",
        department: "",
        password: "", 
    });

    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState(""); 

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); 
        setSuccess(""); 

        try {
       
            const { name, email, role, department, password } = employeeData;
            if (!name || !email || !role || !department || !password) {
                setError("All fields are required.");
                setLoading(false);
                return;
            }

        
            console.log("Sending data:", employeeData);

            const response = await API.post("/admin/employees", employeeData);

            console.log("Response from server:", response);

            if (response.status === 201) {
                setSuccess("Employee added successfully!");
                setEmployeeData({ name: "", email: "", role: "", department: "", password: "" }); 
            } else {
                setError("Failed to add employee.");
            }
        } catch (error) {
            console.error("Error during API request:", error);
            if (error.response) {
                setError(`Error: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                setError("Network error: Unable to reach the server.");
            } else {
                setError("Unexpected error occurred.");
            }
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="container">
            <h2>Add Employee</h2>

            {}
            {success && <div className="success-message">{success}</div>}
            {error && <div className="error-message">{error}</div>}

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
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={employeeData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Employee"}
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
