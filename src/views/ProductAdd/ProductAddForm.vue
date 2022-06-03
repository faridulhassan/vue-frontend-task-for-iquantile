<template lang="">
    <form @submit.prevent="handleSubmit">
        <h2 class="text-2xl font-bold mb-4">Add Product</h2>
        <div class="grid grid-cols-3 gap-4 mb-4">
            <text-field label="Title" name="" v-model="productFields.title"></text-field>
            <text-field label="Description" name="" v-model="productFields.desc"></text-field>
            <text-field label="Quantity" name="" v-model="productFields.quantity"></text-field>
            <text-field label="Price" type="number" name="" v-model="productFields.price"></text-field>
            <text-field label="User ID" name="" v-model="productFields.userId"></text-field>
        </div>
        <Button type="submit"> Submit</Button>
    </form>
</template>
<script>
import { reactive } from "vue";
import TextField from "../../components/TextField.vue";
import Button from "../../components/Button.vue";
export default {
    name: "ProductAddForm",
    components: {
        TextField,
        Button
    },
    props: {
        onSubmit: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        const productFields = reactive({
            title: "",
            desc: "",
            quantity: "",
            price: "",
            userId: ""
        });
        function handleSubmit() {
            props.onSubmit && props.onSubmit(productFields);
        }
        return {
            productFields,
            handleSubmit
        };
    }
};
</script>
<style lang=""></style>
