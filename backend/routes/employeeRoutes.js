const express = require("express");
const employeeController = require("../controllers/employeeController");
const verifyToken = require("../middlewares/authMiddleware");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();

router.use(verifyToken, roleCheck(["Employee"]));

router.get("/profile", employeeController.getProfile);
router.put("/profile", employeeController.updateProfile);


module.exports = router;