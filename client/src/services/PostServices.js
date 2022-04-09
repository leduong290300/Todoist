import { apiUrl } from "../api/index";
import axios from "axios";

export const PostService = { createPost, readPost, deletePost, updatePost };

//todo: Tái dữ liệu bài viết
async function readPost() {
  try {
    const { data } = await axios.get(`${apiUrl}/post`);
    if (data.success) {
      return data.posts;
    }
  } catch (error) {
    return error;
  }
}

//todo: Tạo bài viết mới
async function createPost(title, description, url, status) {
  try {
    const { data } = await axios.post(`${apiUrl}/post/create`, {
      title,
      description,
      url,
      status,
    });
    if (data.success) {
      return data.post;
    }
  } catch (error) {
    return error;
  }
}

//todo: Xóa bài viết
async function deletePost(postId) {
  try {
    const { data } = await axios.delete(`${apiUrl}/post/${postId}`);
    if (data.success) {
      return postId;
    }
  } catch (error) {
    return error;
  }
}

//todo: Cập nhật bài viết
async function updatePost(_id, title, description, url, status) {
  try {
    const { data } = await axios.put(`${apiUrl}/post/${_id}`, {
      title,
      description,
      url,
      status,
    });
    if (data.success) {
      return data.post;
    }
  } catch (error) {
    return error;
  }
}
