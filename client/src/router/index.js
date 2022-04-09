import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/FormView/LoginView.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/FormView/SignupView.vue"),
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView/DashboardView.vue"),
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("data");
  if (authRequired && !loggedIn) {
    return next("/login");
  }
  next();
});
export default router;
