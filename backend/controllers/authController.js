
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateToken } = require("../utils/jwtUtils");

exports.register = async (req, res) => {
    const { name, email, password, role, department } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, role, department });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.json({ token });
};
