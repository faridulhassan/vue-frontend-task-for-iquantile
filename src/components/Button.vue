<template>
    <button :type="type" class="px-3 py-1 font-semibold text-white bg-blue-500 rounded-md hover:opacity-95 focus:outline-none">
        <slot />
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: ""
        }
    },
    setup() {}
};
</script>
