import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
               
            </Routes>
        </Router>
    );
}

export default App;
