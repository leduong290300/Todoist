import { createStore } from "vuex";
import tasks from "./modules/tasks";
import auth from "./modules/auth";
import status from "./modules/status";

export default createStore({
  modules: {
    tasks,
    auth,
    status,
  },
});
