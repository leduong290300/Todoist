//*State
const state = () => ({
  isShow: false,
});

//*Getters
const getters = {};

//*Actions
const actions = {
  isToogleDialog({ commit }, status) {
    commit("setStatus", status);
  },
};

//*Mutations
const mutations = {
  setStatus(state, status) {
    state.isShow = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
