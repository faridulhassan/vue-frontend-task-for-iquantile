<template>
    <div>
        <ProductAddForm :onSubmit="addProduct" :userId="userId" />
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ProductAddForm from "./ProductAddForm.vue";
export default {
    name: "ProductAddView",
    components: {
        ProductAddForm
    },
    setup() {
        const store = useStore();

        const userId = computed(() => store.getters["userStore/userId"]);

        function addProduct(product) {
            store.dispatch("productStore/addProduct", product);
        }

        return {
            addProduct,
            userId
        };
    }
};
</script>
