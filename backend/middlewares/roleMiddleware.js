const roleCheck = (allowedRoles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Forbidden" });

      try {
        const { role } = req.user; 
  
        if (!allowedRoles.includes(role)) {
          return res.status(403).json({ message: "Access Forbidden: Insufficient role" });

        }
        next(); 
      } catch (err) {
        res.status(500).json({ message: "Server Error" });
      }
    };

};

module.exports = roleCheck;

  };
  
  module.exports = roleCheck;

