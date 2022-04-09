import { PostService } from "../../../services/PostServices.js";

//* state
const state = {
  newTodos: [],
  todos: [],
  todoById: null,
};

//* actions

const actions = {
  onReadPost(context) {
    PostService.readPost().then((posts) => {
      context.commit("readPostSuccess", posts);
    });
  },

  onCreatePost(context, { title, description, url, status }) {
    PostService.createPost(title, description, url, status).then((post) => {
      context.commit("createPostSuccess", post);
    });
  },

  onFindIdPost(context, postId) {
    context.commit("findTodoById", postId);
  },

  onDeletePost(context, postId) {
    PostService.deletePost(postId).then((postId) => {
      context.commit("deletePostSuccess", postId);
    });
  },

  onUpdatePost(context, { _id, title, description, url, status }) {
    PostService.updatePost(_id, title, description, url, status).then(
      (data) => {
        context.commit("updatePostSuccess", data);
      },
    );
  },
};

//* mutations
const mutations = {
  readPostSuccess(state, posts) {
    state.todos = posts;
  },

  createPostSuccess(state, post) {
    state.todos = [...state.todos, post];
  },

  deletePostSuccess(state, postId) {
    state.todos = state.todos.filter((todo) => todo._id !== postId);
  },

  findTodoById(state, postId) {
    state.todoById = state.todos.find((todo) => todo._id === postId);
  },

  updatePostSuccess(state, data) {
    state.todos = state.todos.map((todo) =>
      todo._id === data._id ? data : todo,
    );
  },
};

//* getters
const getters = {
  getAllTodos(state) {
    return state.todos;
  },

  getTodoById(state) {
    return state.todoById;
  },
};

export const Todo = { namespaced: true, getters, state, actions, mutations };
