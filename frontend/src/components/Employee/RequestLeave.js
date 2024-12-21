import React, { useState } from "react";
import API from "../../utils/api";
import "./requestleave.css";
const LeaveRequest = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [message, setMessage] = useState("");

    const submitLeaveRequest = async () => {
        try {
            const response = await API.post("/employee/leaves", {
                startDate,
                endDate,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Failed to request leave.");
        }
    };

    return (
        <div className="container">
            <h2>Request Leave</h2>
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            <button onClick={submitLeaveRequest}>Submit Leave Request</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LeaveRequest;
