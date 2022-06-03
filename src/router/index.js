import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginRegistration/LoginView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: LoginView
    },
    {
        path: "/add-product",
        name: "add-product",
        component: () => import("../views/ProductAdd/ProductAddView.vue")
    },
    {
        path: "/products",
        name: "products",
        component: () => import("../views/ProductListView.vue")
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
