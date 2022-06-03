import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginView
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("../views/CartView.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
