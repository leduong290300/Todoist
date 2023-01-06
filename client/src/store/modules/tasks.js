//*State
const state = () => ({
  tasks: [],
});

//*Getters
const getters = {
  getAllTasks: (state) => {
    return state.tasks.length;
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
