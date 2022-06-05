<template>
    <div>
        <Nav :isLoggedIn="isLoggedIn" />
        <div class="container mx-auto px-3 py-4">
            <router-view />
        </div>
    </div>
</template>

<script>
import "./index.css";
import Nav from "./components/Nav.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
    name: "App",
    components: {
        Nav
    },
    props: {},
    setup() {
        const store = useStore();
        const isLoggedIn = computed(() => {
            return store.getters["userStore/isLoggedIn"];
        });

        onMounted(() => {
            const user = localStorage.getItem("user");
            if (user) {
                store.dispatch("userStore/addUser", JSON.parse(user), true);
            }
            const products = localStorage.getItem("products");
            if (products) {
                store.dispatch("productStore/loadProducts", JSON.parse(products));
            }
        });

        return {
            isLoggedIn
        };
    }
};
</script>
