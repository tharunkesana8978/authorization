import React, { useState } from "react";
import API from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./login.css";


const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/auth/login", credentials);
            localStorage.setItem("authToken", data.token);
            alert("Login successful!");

            
            const user = JSON.parse(atob(data.token.split(".")[1])); 
            if (user.role === "Admin") navigate("/admin/dashboard");
            else if (user.role === "Manager") navigate("/manager/dashboard");
            else navigate("/employee/dashboard");
        } catch (error) {
            console.error(error);
            alert("Login failed.");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
