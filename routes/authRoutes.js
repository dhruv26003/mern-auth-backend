const express = require("express");
const { register, login, getUsers } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", auth, role("admin"), getUsers);

module.exports = router;
