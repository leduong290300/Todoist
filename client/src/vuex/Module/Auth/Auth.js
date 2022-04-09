import { AuthenServices } from "../../../services/AuthenServices";
import router from "../../../router";

//* state
const state = {
  status: { isLogin: false, isRegister: true },
  user: null,
};

//* actions
const actions = {
  onHandleLogin(context, { username, password }) {
    AuthenServices.handleLogin(username, password).then((data) => {
      context.commit("loginSuccess", data.user);
      if (data.success) {
        router.push({ name: "Dashboard" });
      }
    });
  },

  onHandleRegister(context, { username, password }) {
    AuthenServices.handleRegister(username, password).then((success) => {
      context.commit("registerSuccess");
      if (success) {
        router.push({ name: "Login" });
      }
    });
  },

  onHandleLogout(context) {
    AuthenServices.handleLogout();
    context.commit("logoutSuccess");
    router.push({ name: "Login" });
  },

  onHandleVerifyUser(context) {
    AuthenServices.verifyUser().then((data) => {
      context.commit("verifyUserSuccess", data.user);
    });
  },
};

//* mutations
const mutations = {
  loginSuccess(state, user) {
    state.status = { isLogin: true };
    state.user = user;
  },

  registerSuccess(state) {
    state.status = { isRegister: true };
  },

  logoutSuccess(state) {
    state.status = { isLogin: false };
    state.user = null;
  },

  verifyUserSuccess(state, user) {
    state.user = user;
  },
};

//* getter
const getters = {
  getUsername(state) {
    if (state.user) {
      return state.user.username;
    }
  },
};

export const Auth = { namespaced: true, state, getters, actions, mutations };
