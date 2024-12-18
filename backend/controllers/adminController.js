const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createEmployee = async (req, res) => {
    try {
        const { name, email, password, role, department } = req.body;

        
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email, and password are required" });
        }

       
        const hashedPassword = bcrypt.hashSync(password, 10);

      
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
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.json({ message: "Employee updated successfully", updatedEmployee });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEmployee = await User.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

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
