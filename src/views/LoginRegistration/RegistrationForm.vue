<template>
    <div class="mb-3">
        <form @submit.prevent="handleSubmit">
            <h2 class="text-2xl font-bold mb-4">Register</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input-field label="Name" name="name" v-model="fields.name"></input-field>
                <input-field label="Email" name="email" type="email" v-model="fields.email"></input-field>
                <input-field label="Password" name="password" type="password" v-model="fields.password"></input-field>
                <input-field label="Confirm Password" name="confirmPassword" type="password" v-model="fields.confirmPassword"></input-field>
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
    setup(props) {
        const fields = reactive({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

        function handleSubmit() {
            if (props.onSubmit) {
                props.onSubmit({
                    ...fields
                });
            }
        }

        return {
            fields,
            handleSubmit
        };
    }
};
</script>
