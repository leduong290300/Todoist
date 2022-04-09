const router = require("express").Router();
const AuthController = require("../controller/AuthController");
const verifyToken = require("../middleware/verifyToken");

router.route("/register").post(AuthController.handleRegisteAccount);
router.route("/login").post(AuthController.handleLoginAccount);
router.route("/").get(verifyToken, AuthController.verifyAuth);

module.exports = router;
