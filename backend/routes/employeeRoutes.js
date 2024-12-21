const express = require("express");
const employeeController = require("../controllers/employeeController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();

router.use(verifyToken, roleCheck(["Employee"]));

router.get("/profile", employeeController.getProfile);
router.put("/profile/", employeeController.updateProfile);
router.post("/attendance/", employeeController.markAttendance);
router.post("/leaves/", employeeController.requestLeave);
router.get("/tasks", employeeController.getAssignedTasks);




module.exports = router;