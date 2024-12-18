const express = require("express");
const employeeController = require("../controllers/employeeController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();

router.use(verifyToken, roleCheck(["Employee"]));

router.get("/profile", employeeController.getProfile);
router.put("/profile/:id", employeeController.updateProfile);
router.post("/attendance/:id", employeeController.markAttendance);
router.post("/leaves/:id", employeeController.requestLeave);



module.exports = router;