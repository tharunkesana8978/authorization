const jwt = require("jsonwebtoken");
const User = require("../models/User");


const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid Token" });

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = await User.findById(decoded.id).select("-password"); 

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });

    }
    next(); 
  } catch (err) {
    res.status(401).json({ message: "Access Denied: Invalid token" });
  }
};

module.exports = verifyToken;