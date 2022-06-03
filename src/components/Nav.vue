<template>
    <nav class="bg-white shadow border-gray-200 py-2.5 rounded dark:bg-gray-800">
        <div class="container mx-auto px-3">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <router-link class="py-2" to="/"> Login </router-link>
                <router-link class="py-2" to="/add-product"> Add Product </router-link>
                <router-link class="py-2" to="/products"> Show Products </router-link>
                <router-link class="py-2" to="/cart"> Cart </router-link>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Nav"
};
</script>
<style lang=""></style>
