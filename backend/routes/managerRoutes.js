const express = require("express");
const managerController = require("../controllers/managerController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();

router.use(verifyToken, roleCheck(["Manager"]));

router.get("/employees", managerController.getDepartmentEmployees);
router.post("/tasks", managerController.assignTask);
router.put("/leaves/:id", managerController.manageLeaveRequest);

module.exports = router;