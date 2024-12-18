const express = require("express");
const adminController = require("../controllers/adminController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();


router.post("/employees", verifyToken, roleCheck(["Admin"]), adminController.createEmployee);
router.put("/employees/:id", verifyToken, roleCheck(["Admin"]), adminController.updateEmployee);
router.delete("/employees/:id", verifyToken, roleCheck(["Admin"]), adminController.deleteEmployee);
router.get("/employees", verifyToken, roleCheck(["Admin"]), adminController.getAllEmployees);

module.exports = router;
