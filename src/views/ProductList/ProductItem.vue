<template lang="">
    <div class="border rounded p-3 shadow-sm">
        <div class="relative flex flex-col justify-between min-h-full">
            <div class="">
                <div class="rounded bg-indigo-100 inline-block text-center font-bold text-sm py-1 px-3 absolute top-0 right-0">{{ stockStatus }}</div>
                <h2 class="font-bold text-2xl mb-2 capitalize">{{ product.name }}</h2>
                <div class="">{{ product.description }}</div>
            </div>
            <div class="">
                <div class="my-2"><b>Price</b>: ${{ product.price }}</div>
                <div class="my-2">
                    <b>Size</b>: <span class="uppercase"> {{ product.variantSize }}</span>
                </div>
                <div class="my-2 flex justify-between">
                    <div class="">
                        <b>Category</b>: <span class="rounded bg-indigo-200 text-center p-1">{{ product.category }}</span>
                    </div>
                    <Button class="p-2">Add to cart</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import Button from "../../components/Button.vue";

export default {
    name: "ProductItem",
    components: {
        Button
    },
    props: {
        product: {
            type: Object,
            required: true,
            default: () => ({})
        }
    },
    setup(props) {
        const stockStatus = computed(() => {
            const status = +props.product.quantity > 0 ? `In stock ${props.product.quantity}` : "Stock out";

            return status;
        });
        return {
            stockStatus
        };
    }
};
</script>
<style lang=""></style>
