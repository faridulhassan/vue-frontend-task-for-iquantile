<template>
    <div class="mb-3">
        <form @submit.prevent="handleSubmit">
            <h2 class="text-2xl font-bold mb-4">Register</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input-field label="Name" name="name" v-model="fields.name" ref="nameFieldRef" required></input-field>
                <input-field label="Email" name="email" type="email" v-model="fields.email" required ref="emailFieldRef"></input-field>
                <input-field label="Password" name="password" type="password" v-model="fields.password" required ref="passwordFieldRef" :outerValidate="validatePassowrd" error-message="Password must be uppercase, lowercase, number, and minimum of 6 characters"></input-field>
                <input-field
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    v-model="fields.confirmPassword"
                    required
                    ref="confirmPasswordFieldRef"
                    :outerValidate="validateConfirmPassowrd"
                    error-message="Password must be uppercase, lowercase, number, and minimum of 6 characters and must be same as confirm password"
                ></input-field>
            </div>
            <Button type="submit"> Submit</Button>
        </form>
    </div>
</template>
<script>
import { reactive, ref } from "vue";
import Button from "../../components/Button.vue";
import InputField from "../../components/InputField.vue";

export default {
    name: "RegistrationForm",
    components: {
        InputField,
        Button
    },
    props: {
        onSubmit: {
            type: Function,
            required: true
        }
    },
    setup(props, context) {
        const fields = reactive({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

        const nameFieldRef = ref(null);
        const emailFieldRef = ref(null);
        const passwordFieldRef = ref(null);
        const confirmPasswordFieldRef = ref(null);

        function validatePassowrd(value) {
            const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
            return !regex.test(value);
        }

        function validateConfirmPassowrd(value) {
            const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
            return fields.password !== fields.confirmPassword && !regex.test(value);
        }

        function validate() {
            const isValidName = nameFieldRef.value.validate();
            const isValidEmail = emailFieldRef.value.validate();
            const isValidPassword = passwordFieldRef.value.validate();
            const isValidConfirmPassword = confirmPasswordFieldRef.value.validate();
            return isValidName && isValidEmail && isValidPassword && isValidConfirmPassword;
        }
        function handleSubmit() {
            if (!validate()) {
                return;
            }
            if (props.onSubmit) {
                props.onSubmit({
                    ...fields
                });
            }
        }

        return {
            fields,
            nameFieldRef,
            emailFieldRef,
            passwordFieldRef,
            confirmPasswordFieldRef,
            handleSubmit,
            validatePassowrd,
            validateConfirmPassowrd
        };
    }
};
</script>
