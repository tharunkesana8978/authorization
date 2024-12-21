import React, { useState } from "react";
import API from "../../utils/api";
import "./attendance.css";

const Attendance = () => {
    const [status, setStatus] = useState(""); 
    const [message, setMessage] = useState(""); 

    const markAttendance = async () => {
        if (!status) {
            setMessage("Please select an attendance status.");
            return;
        }

        try {
            const response = await API.post("/employee/attendance", { status }); 
            setMessage(response.data.message || "Attendance marked successfully.");
        } catch (error) {
            console.error(error);
            setMessage(
                error.response?.data?.message || "Failed to mark attendance. Please try again."
            );
        }
    };

    return (
        <div className="container">
            <h2>Mark Attendance</h2>
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select Status
                </option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
            <button onClick={markAttendance}>Mark Attendance</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Attendance;
