<template>
    <div>
        <ProductAddForm :onSubmit="addProduct" />
    </div>
</template>

<script>
import ProductAddForm from "./ProductAddForm.vue";
export default {
    name: "ProductAddView",
    components: {
        ProductAddForm
    },
    setup() {
        function addProduct(product) {
            console.log(product);
        }

        return {
            addProduct
        };
    }
};
</script>
