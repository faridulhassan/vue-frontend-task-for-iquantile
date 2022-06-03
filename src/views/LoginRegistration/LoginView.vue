<template>
    <div>
        <RegistrationForm :onSubmit="handleRegistration" />
    </div>
</template>

<script>
import { useRouter } from "vue-router";

import RegistrationForm from "./RegistrationForm.vue";
export default {
    name: "LoginView",
    components: {
        RegistrationForm
    },
    setup(props) {
        const router = useRouter();
        function handleRegistration(fieldsValue) {
            console.log(fieldsValue);
            console.log(router.push("/add-product"));
        }

        return {
            handleRegistration
        };
    }
};
</script>
