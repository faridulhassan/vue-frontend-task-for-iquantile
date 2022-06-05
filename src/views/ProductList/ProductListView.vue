<template>
    <div>
        <h1 class="mb-4 font-bold text-2xl">Product List Page</h1>
        <div class="my-6">
            <SearchFilter @searchFilter="handleSearchFilter" />
        </div>

        <div class="product-list grid grid-cols-3 gap-4 mb-4">
            <ProductItem v-for="product in filteredProducts" :product="product" />
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";
import SearchFilter from "./SearchFilter.vue";
export default {
    name: "ProductListView",
    components: {
        ProductItem,
        SearchFilter
    },
    setup() {
        const store = useStore();
        /* Computed */
        const products = computed(() => store.state.productStore.products);

        let filteredProducts = ref(products.value || []);

        /* Functions */
        const handleSearchFilter = (searchFilterValue) => {
            filteredProducts.value = products.value.filter((product) => {
                let isMatched = true;
                for (let [key, value] of Object.entries(searchFilterValue)) {
                    let shouldBreak = false;
                    if (value) {
                        switch (key) {
                            case "name": {
                                if (product.name.toLowerCase().indexOf(value.trim().toLowerCase()) === -1) {
                                    shouldBreak = true;
                                }
                                break;
                            }
                            case "category": {
                                if (product.category.toLowerCase().indexOf(value.trim().toLowerCase()) === -1) {
                                    shouldBreak = true;
                                }
                                break;
                            }
                            case "variantSize": {
                                if (product.variantSize.toLowerCase().indexOf(value.trim().toLowerCase()) === -1) {
                                    shouldBreak = true;
                                }
                                break;
                            }
                        }
                    }
                    if (shouldBreak) {
                        isMatched = false;
                        break;
                    }
                }

                return isMatched;
            });
        };
        return {
            products,
            filteredProducts,
            handleSearchFilter
        };
    }
};
</script>
