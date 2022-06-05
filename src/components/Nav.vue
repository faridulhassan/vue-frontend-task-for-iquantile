<template>
    <nav class="bg-white shadow border-gray-200 py-2.5 rounded dark:bg-gray-800">
        <div class="container mx-auto px-3">
            <div class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:items-center">
                <router-link to="/">
                    <span class="flex justify-center items-center w-12 h-12 rounded-full bg-slate-200 text-gray-500 font-bold"> Logo </span>
                </router-link>
                <div class="flex-auto"></div>
                <template v-if="isLoggedIn">
                    <router-link class="py-2" to="/add-product"> Add Product </router-link>
                    <router-link class="py-2" to="/products"> Show Products </router-link>
                    <router-link class="py-2" to="/cart"> Cart </router-link>
                    <router-link class="py-2" to="/logout"> Logout </router-link>
                </template>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "Nav",
    props: {
        isLoggedIn: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {};
    }
};
</script>
<style lang=""></style>
