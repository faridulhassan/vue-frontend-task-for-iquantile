<template lang="">
    <div class="px-3 py-2 border shadow-sm rounded">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input-field
                label="Title"
                name=""
                v-model="productFields.name"
                @keyup="
                    ({ target: { value } }) => {
                        debounceSearchInput(value);
                    }
                "
            ></input-field>
            <input-field label="Category" name="" v-model="productFields.category" tag="select" :options="category" @change="searchFilter"></input-field>
            <input-field label="Varient Size" name="" v-model="productFields.variantSize" tag="select" :options="variantSize" @change="searchFilter"></input-field>
        </div>
    </div>
</template>
<script>
import { reactive } from "vue";
import InputField from "../../components/InputField.vue";

export default {
    components: {
        InputField
    },
    emits: ["searchFilter"],
    setup(props, context) {
        const category = [
                {
                    name: "All",
                    value: ""
                },
                {
                    name: "Footwear",
                    value: "footwear"
                },
                {
                    name: "Jackets",
                    value: "jackets"
                }
            ],
            variantSize = [
                {
                    name: "All",
                    value: ""
                },
                {
                    name: "M",
                    value: "m",
                    selected: true
                },
                {
                    name: "XL",
                    value: "xl"
                }
            ];

        let productFields = reactive({ name: "", category: "", variantSize: "" });

        let timer;
        const debounceSearchInput = function (val) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                productFields.name = val;
                searchFilter();
            }, 100);
        };

        const searchFilter = () => {
            context.emit("searchFilter", productFields);
        };

        return {
            productFields,
            category,
            variantSize,
            searchFilter,
            debounceSearchInput
        };
    }
};
</script>
<style lang=""></style>
