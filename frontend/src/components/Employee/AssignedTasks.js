import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import "./assignedtask.css";

const AssignedTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await API.get("/employee/tasks");
                setTasks(response.data.tasks);
            } catch (error) {
                setMessage(error.response?.data?.message || "Failed to fetch tasks.");
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h2>Assigned Tasks</h2>
            {message && <p>{message}</p>}
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task._id}>
                            <strong>{task.title}</strong>: {task.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks assigned.</p>
            )}
        </div>
    );
};

export default AssignedTasks;
