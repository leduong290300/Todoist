//*State
const state = () => ({
  isAuthenticated: false,
  data: {
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
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
