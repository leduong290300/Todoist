import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../layouts/LayoutPage.vue"),
      children: [
        {
          path: "",
          name: "DashboardView",
          component: () => import("../views/DashboardView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../layouts/LayoutForm.vue"),
      children: [
        {
          path: "",
          name: "LoginView",
          component: () => import("../views/LoginView.vue"),
        },
      ],
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../layouts/LayoutForm.vue"),
      children: [
        {
          path: "",
          name: "RegisterView",
          component: () => import("../views/RegisterView.vue"),
        },
      ],
    },
    {
      path: "/reset_password",
      name: "Reset",
      component: () => import("../layouts/LayoutForm.vue"),
      children: [
        {
          path: "",
          name: "ResetPasswordView",
          component: () => import("../views/ResetPasswordView.vue"),
        },
      ],
    },
  ],
});

export default router;
