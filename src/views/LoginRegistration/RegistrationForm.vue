<template>
    <div class="mb-3">
        <form @submit.prevent="handleSubmit">
            <h2 class="text-2xl font-bold mb-4">Register</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <text-field label="Name" name="name" v-model="name"></text-field>
                <text-field label="Email" name="email" type="email" v-model="email"></text-field>
                <text-field label="Password" name="password" type="password" v-model="password"></text-field>
                <text-field label="Confirm Password" name="confirmPassword" type="password" v-model="confirmPassword"></text-field>
            </div>
            <Button type="submit"> Submit</Button>
        </form>
    </div>
</template>
<script>
import { ref } from "vue";
import Button from "../../components/Button.vue";
import TextField from "../../components/TextField.vue";

export default {
    name: "RegistrationForm",
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
        const name = ref(""),
            email = ref(""),
            password = ref(""),
            confirmPassword = ref("");

        function handleSubmit() {
            if (props.onSubmit) {
                props.onSubmit({
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
                });
            }
        }

        return {
            name,
            email,
            password,
            confirmPassword,
            handleSubmit
        };
    }
};
</script>
