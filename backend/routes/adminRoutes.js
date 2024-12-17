const express = require("express");

const adminController = require("../controllers/adminController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");


const router = express.Router();

router.use(verifyToken, roleCheck(["Admin"]));

router.post("/employees", adminController.createEmployee);
router.put("/employees/:id", adminController.updateEmployee);
router.delete("/employees/:id", adminController.deleteEmployee);
router.get("/employees", adminController.getAllEmployees);

module.exports = router;