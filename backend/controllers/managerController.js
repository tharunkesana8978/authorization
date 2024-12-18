const User = require("../models/User");
const Task = require("../models/Task");
const LeaveRequest = require("../models/LeaveRequest");


exports.getDepartmentEmployees = async (req, res) => {
    try {
        const { department } = req.user;
        const employees = await User.find({ department, role: "Employee" });

        res.json(employees);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.assignTask = async (req, res) => {
    try {
        const { title, description, assignedTo } = req.body;

        const task = new Task({
            title,
            description,
            assignedTo,
            assignedBy: req.user.id,
        });

        await task.save();
        res.status(201).json({ message: "Task assigned successfully", task });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.manageLeaveRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const leaveRequest = await LeaveRequest.findByIdAndUpdate(id, { status, approvedBy: req.user.id }, { new: true });

        res.json({ message: "Leave request updated", leaveRequest });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};