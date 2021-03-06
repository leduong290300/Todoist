const Post = require("../models/PostModels");

const PostController = {
  /**
   * @params /api/post
   * @description Lấy dữ liệu bài viết
   */
  handleReadPost: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.userId }).populate("user", [
        "username",
      ]);
      res.json({ success: true, posts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },

  /**
   * @params /api/post/create
   * @description Tạo bài viết
   */
  handleCreatePost: async (req, res) => {
    const { title, description, url, status } = req.body;
    try {
      const newPost = new Post({
        title,
        description,
        url: url.startsWith("https://") ? url : `https://${url}`,
        status: status,
        user: req.userId,
      });

      await newPost.save();

      res.json({
        success: true,
        message: "Thêm kĩ năng cần học thành công",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },

  /**
   * @params /api/post/update/:id
   * @description Cập nhật bài viết
   */
  handleUpdatePost: async (req, res) => {
    const { title, description, url, status } = req.body;

    try {
      let updatedPost = {
        title,
        description: description || "",
        url: (url.startsWith("https://") ? url : `https://${url}`) || "",
        status: status,
      };

      const postUpdateCondition = { _id: req.params.id, user: req.userId };

      updatedPost = await Post.findOneAndUpdate(
        postUpdateCondition,
        updatedPost,
        { new: true },
      );

      // User not authorised to update post or post not found
      if (!updatedPost)
        return res.status(401).json({
          success: false,
          message: "Bài viết không tồn tại",
        });

      res.json({
        success: true,
        message: "Cập nhật thành công",
        post: updatedPost,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },

  /**
   * @params /api/post/delete/:id
   * @description Xóa bài viết
   */
  handleDeletePost: async (req, res) => {
    try {
      const postDeleteCondition = { _id: req.params.id, user: req.userId };
      const deletedPost = await Post.findOneAndDelete(postDeleteCondition);

      // User not authorised or post not found
      if (!deletedPost)
        return res.status(401).json({
          success: false,
          message: "Bài viết không tồn tại",
        });

      res.json({ success: true, post: deletedPost });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Xảy ra lỗi" });
    }
  },
};

module.exports = PostController;
