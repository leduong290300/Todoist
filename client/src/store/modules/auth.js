import router from "../../router";

//*State
const state = () => ({
  isAuthenticated: false,
  data: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    avatarUrl: null,
  },
});

//*Getters
const getters = {
  isAuthentication: (state) => {
    return state.isAuthenticated;
  },
};

//*Actions
const actions = {};

//*Mutations
const mutations = {
  //* Handle register account
  IS_REGISTER_ACCOUNT(state, value) {
    state.data = value;
  },

  //* Handle login account
  IS_LOGIN_ACCOUNT(state, value) {
    const { email, password } = state.data;
    if (email !== value.email) {
      console.log("Email không chính xác");
    }
    if (password !== value.password) {
      console.log("Password không chính xác");
    }
    router.push("/");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
