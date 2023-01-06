const express = require("express");
const router = express.Router();
const { handleRegisterUser } = require("../controllers/UserController");

router.route("/").get();
router.route("/login").post();
router.route("/register").post(handleRegisterUser);

module.exports = router;
