const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    const token = authHeader.replace("Bearer ", ""); 

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid Token" });
    }
};

module.exports = verifyToken;
