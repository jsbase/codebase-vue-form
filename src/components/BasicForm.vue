<template>
  <div
    class="relative px-6 pt-10 pb-8 bg-white text-gray-800 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
  >
    <h1 class="text-4xl font-bold underline">BasicForm</h1>

    <FormKit id="form" v-model="data" type="form">
      <FormKit
        type="text"
        name="firstname"
        label="Firstname"
        placeholder="Firstname"
        validation="required"
        validation-visibility="live"
        :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
      />

      <FormKit
        type="text"
        name="lastname"
        label="Lastname"
        placeholder="Lastname"
        validation="required"
        validation-visibility="live"
        :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
      />

      <FormKit
        type="date"
        name="birthdate"
        label="Birthday"
        help="Select your birthday"
        :validation="[['required'], ['date_between', latest, today]]"
        validation-visibility="live"
        :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
      />

      <FormKit
        name="mailtype"
        type="text"
        value="other"
        :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
      />

      <FormKit
        name="mailvalue"
        type="email"
        label="Email"
        help="Notice it takes a full second for the data to update."
        :delay="1000"
        validation="required|length:5|email"
        validation-visibility="live"
        :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
      />

      <FormKit
        name="mail-primary"
        type="checkbox"
        label="Is prime?"
        help="Is this your main email adress?"
        :classes="{ input: 'form-checkbox px-4 py-3 rounded-full' }"
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
      validation-visibility="dirty"
      autocomplete="off"
      :classes="{ input: 'form-input px-4 py-3 rounded-full' }"
    />

    <FormKit type="submit" help="Push this button to submit!" @click="submitHandler">Submit</FormKit>
  </div>

  <h2>Results:</h2>

  <pre>{{ emailtype }}</pre>
  <pre>{{ emailvalue }}</pre>
  <pre>{{ emailprimary }}</pre>
  <pre>{{ data }}</pre>
</template>

<script setup>
import { setErrors } from "@formkit/vue";
import { ref } from "vue";

const data = ref({});
const mail = ref({});
const latest = new Date("1978-01-01");
const today = new Date();

const submitHandler = async function () {
  await new Promise((resolve) => setTimeout(() => {
    // Object.assign(data.value, {
    //   email: {
    //     type: emailtype,
    //     value: emailvalue,
    //     primary: emailprimary,
    //   }
    // });

    // console.log('Results: ', results); // eslint-disable-line

    return resolve();
  }, 2000));

  setErrors("form", ["This isn't setup to actually do anything."]);
};
</script>
