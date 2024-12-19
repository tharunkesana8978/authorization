const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1000h" });
};

module.exports = { generateToken };