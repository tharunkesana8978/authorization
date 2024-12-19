import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Auth/Login";

import Register from "./components/Auth/Register";



function App() {
    return (
        <Router>
            <Routes>

                <Route path="/Login" element={<Login />} />

                
            <Route path="/" element={<Register />} />

               
            </Routes>
        </Router>
    );
}

export default App;
