<template>
    <div>
        <Nav />
        <div class="container mx-auto px-3 py-4">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import "./index.css";
import Nav from "./components/Nav.vue";
</script>
