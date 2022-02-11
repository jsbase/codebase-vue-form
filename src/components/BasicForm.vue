<template>
    <div
        class="relative px-6 pt-10 pb-8 bg-white text-gray-800 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
    >
        <h1 class="text-4xl font-bold underline">BasicForm</h1>

        <FormKit
            id="form"
            v-model="data"
            type="form"
            autocomplete="off"
            form-class="grid grid-cols-1 gap-6 my-8 mx-auto w-full max-w-2xl bg-white p-6 shadow-lg rounded"
            @submit="handleSubmit"
        >
            <FormKit
                type="text"
                name="firstname"
                label="Firstname"
                placeholder="Firstname"
                validation="required"
                validation-visibility="live"
                autocomplete="off"
            />

            <FormKit
                type="text"
                name="lastname"
                label="Lastname"
                placeholder="Lastname"
                validation="required"
                validation-visibility="live"
                autocomplete="off"
            />

            <FormKit
                type="date"
                name="birthdate"
                label="Birthday"
                help="Select your birthday"
                :validation="[['required'], ['date_between', latest, today]]"
                validation-visibility="live"
            />

            <FormKit v-model="email" type="group">
                <FormKit name="type" type="text" value="other" />

                <FormKit
                    name="value"
                    type="email"
                    label="Email"
                    help="Notice it takes a full second for the data to update."
                    :delay="1000"
                    validation="required|email"
                    validation-visibility="live"
                />

                <FormKit
                    name="primary"
                    type="checkbox"
                    label="Is Primary"
                    help="Is this your main email account?"
                    validation="required"
                    validation-visibility="live"
                />
            </FormKit>

            <FormKit
                type="text"
                name="phone"
                label="Phone Number"
                placeholder="01xxxxxxxx"
                :validation="[['required'], ['matches', /^\d{11}$/]]"
                :validation-messages="{
                    matches: 'Phone number must be formatted: 01xxxxxxxxx',
                }"
                validation-visibility="live"
                autocomplete="off"
            />
        </FormKit>
    </div>

    <h3 class="text-3xl font-bold">Results:</h3>
    <pre>{{ data }}</pre>
</template>

<script setup>
import { setErrors } from "@formkit/vue";
import { ref } from "vue";

const data = ref({});
const email = ref({});
const latest = new Date("1978-01-01");
const today = new Date();

// eslint-disable-next-line no-unused-vars
const submitHandler = async function () {
    await new Promise((r) => setTimeout(r, 2000));
    setErrors("form", ["This isn’t setup to actually do anything."]);
};
</script>
