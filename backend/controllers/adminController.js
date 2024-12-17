const User = require("../models/User");

exports.createEmployee = async (req, res) => {
    try {
        const { name, email, password, role, department } = req.body;
        const hashedPassword = require("bcrypt").hashSync(password, 10);
        const employee = new User({ name, email, password: hashedPassword, role, department });
        await employee.save();

        res.status(201).json({ message: "Employee created successfully", employee });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedEmployee = await User.findByIdAndUpdate(id, updates, { new: true });
        res.json({ message: "Employee updated", updatedEmployee });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: "Employee deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await User.find();
        res.json(employees);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};