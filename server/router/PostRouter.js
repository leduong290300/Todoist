const router = require("express").Router();
const PostController = require("../controller/PostController");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(verifyToken, PostController.handleReadPost);
router.route("/create").post(verifyToken, PostController.handleCreatePost);
router.route("/:id").put(verifyToken, PostController.handleUpdatePost);
router.route("/:id").delete(verifyToken, PostController.handleDeletePost);
module.exports = router;
