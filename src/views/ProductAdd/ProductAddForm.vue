<template lang="">
    <form @submit.prevent="handleSubmit">
        <h2 class="text-2xl font-bold mb-4">Add Product</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input-field label="Title" name="" v-model="productFields.name" :errors="['hsdfsdf']"></input-field>
            <input-field label="Description" name="" v-model="productFields.description" tag="textarea"></input-field>
            <input-field label="Quantity" name="" type="number" v-model="productFields.quantity"></input-field>
            <input-field label="Category" name="" v-model="productFields.category" tag="select" :options="category"></input-field>
            <input-field label="Price" type="number" name="" v-model="productFields.price"></input-field>
            <input-field label="Varient Size" name="" v-model="productFields.variantSize" tag="select" :options="variantSize"></input-field>
            <input-field label="User ID" name="" v-model="productFields.userId" disabled></input-field>
        </div>
        <Button type="submit"> Submit</Button>
    </form>
</template>
<script>
import { reactive } from "vue";
import InputField from "../../components/InputField.vue";
import Button from "../../components/Button.vue";
import { category, variantSize } from "../../utils";
export default {
    name: "ProductAddForm",
    components: {
        InputField,
        Button
    },
    props: {
        onSubmit: {
            type: Function,
            required: true
        },
        userId: {
            type: [String, Number],
            required: true
        }
    },
    setup(props) {
        const getInitialProductFieldsValue = function () {
            return {
                name: "",
                description: "",
                quantity: "",
                price: "",
                userId: props.userId,
                category: "",
                variantSize: variantSize[0].value
            };
        };
        let productFields = reactive(getInitialProductFieldsValue());
        function handleSubmit() {
            props.onSubmit && props.onSubmit(productFields);
            productFields.name = productFields.description = productFields.quantity = productFields.price = productFields.category = "";
            productFields.variantSize = variantSize[0].value;
        }
        return {
            productFields,
            category,
            variantSize,
            handleSubmit
        };
    }
};
</script>
<style lang=""></style>
