import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { Auth } from "./Module/Auth/Auth";
import { Todo } from "./Module/Todo/Todo";
const store = new Vuex.Store({
  modules: {
    Auth,
    Todo,
  },
});
export default store;
