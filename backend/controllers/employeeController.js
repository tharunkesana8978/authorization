const User = require("../models/User");
const Attendance = require("../models/Attendance");
const LeaveRequest = require("../models/LeaveRequest");

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        const updatedProfile = await User.findByIdAndUpdate(req.user.id, updates, { new: true });

        res.json({ message: "Profile updated", updatedProfile });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
