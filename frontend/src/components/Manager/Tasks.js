import React, { useState } from "react";
import API from "../../utils/api";

const Tasks = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/manager/tasks", taskData);
      alert("Task assigned successfully!");
      setTaskData({ title: "", description: "", assignedTo: "" });
    } catch (error) {
      console.error("Error assigning task:", error);
      alert("Failed to assign task.");
    }
  };

  return (
    <div className="tasks">
      <h2>Assign Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={taskData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={taskData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="assignedTo"
          placeholder="Assign to (Employee ID)"
          value={taskData.assignedTo}
          onChange={handleChange}
          required
        />
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default Tasks;
