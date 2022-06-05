<template>
    <div>
        <RegistrationForm :onSubmit="handleRegistration" />
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { nanoid } from "nanoid";

import RegistrationForm from "./RegistrationForm.vue";
export default {
    name: "RegistrationView",
    components: {
        RegistrationForm
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();
        function handleRegistration(fieldsValue) {
            console.log(fieldsValue);
            router.push("/add-product");
            store.dispatch("userStore/addUser", fieldsValue);
        }

        return {
            handleRegistration
        };
    }
};
</script>
