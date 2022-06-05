import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/LoginRegistration/RegistrationView.vue";

import store from "../store";

const routes = [
    {
        path: "/",
        name: "login",
        component: RegistrationView
    },
    {
        path: "/add-product",
        name: "add-product",
        component: () => import("../views/ProductAdd/ProductAddView.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/products",
        name: "products",
        component: () => import("../views/ProductList/ProductListView.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("../views/CartView.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/logout",
        name: "logout",
        component: RegistrationView,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    }
});
router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters["userStore/isLoggedIn"];
    if (to.name == "logout") {
        store.dispatch("userStore/removeUser");
        store.dispatch("productStore/removeProducts");
        next({ name: "login" });
    } else if (to.name == "login" && isLoggedIn) {
        next({ name: "add-product" });
    } else if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;
