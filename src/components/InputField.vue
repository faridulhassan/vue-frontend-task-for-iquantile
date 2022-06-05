<template>
    <div>
        <label v-if="label" class="form-label block mb-1 font-semibold text-gray-700" :for="id">{{ label }}</label>
        <div class="relative">
            <component
                :is="tag !== 'input' ? tag : 'input'"
                :id="id"
                ref="input"
                v-bind="$attrs"
                class="px-2 py-2 h-12 leading-normal block w-full text-gray-800 bg-white font-sans rounded-lg text-left appearance-none outline-none"
                :class="[
                    {
                        'border-red-400': error,
                        'pl-12': withIcon === true,
                        'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none': disabled
                    },
                    classes
                ]"
                :type="tag === 'select' ? null : type"
                :value="modelValue"
                @input="onInput"
                :disabled="disabled"
                :required="required"
            >
                <template v-if="tag === 'select' && options.length">
                    <option v-for="option in options" :value="option.value" :selected="!!option.selected">{{ option.name }}</option>
                </template>
            </component>

            <div v-if="error" class="text-red-600 mt-1 text-sm">
                {{ errorMessage }}
            </div>

            <svg class="absolute text-red-600 fill-current" style="top: 12px; right: 12px" v-if="error" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z" />
            </svg>

            <div class="absolute left-0 top-0 bottom-0 w-10 block ml-2" v-if="withIcon">
                <slot name="icon"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { nanoid } from "nanoid";
export default defineComponent({
    name: "InputField",

    inheritAttrs: false,

    props: {
        id: {
            type: String,
            default() {
                return `text-input-${nanoid()}`;
            }
        },
        type: {
            type: String,
            default: "text"
        },
        tag: {
            type: String,
            default: "input"
        },
        disabled: {
            type: Boolean
        },
        modelValue: String,
        options: {
            type: Array,
            default: () => []
        },
        label: String,
        errorMessage: {
            type: String,
            default: "This field is required"
        },
        withIcon: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: true
        },
        required: {
            type: Boolean,
            default: false
        },
        outerValidate: {
            type: Function,
            required: false
        }
    },
    emmits: ["update:modelValue"],
    setup(props, context) {
        /* Computed */
        const classes = computed(() => {
            return {
                "border-2 focus:border-blue-600 focus:border-blue-600": props.bordered === true,
                "border bg-gray-200 focus:bg-white": props.bordered === false
            };
        });
        const error = ref(false);
        /* Methods */
        function onInput(e) {
            context.emit("update:modelValue", e.target.value);
        }
        const validate = function () {
            const _value = props.modelValue.trim();
            error.value = props.outerValidate ? props.outerValidate(_value) : props.required && !_value.length;
            return !error.value;
        };
        /* Return */

        return {
            classes,
            error,
            onInput,
            validate
        };
    }
});
</script>
