<template>
  <form @submit.prevent="submitForm">
    <input type="text" name="name" v-model="form.name" placeholder="Your Name" />
    <input type="email" name="email" v-model="form.email" placeholder="Your Email" />
    <textarea name="message" v-model="form.message" placeholder="Your Message"></textarea>
    <button type="submit">Send Message</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const WEB3FORMS_ACCESS_KEY = "0a317027-cefc-41e5-979e-0c70315e3f4d";

// Define the form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Reactive form state
const form = ref<FormData>({
  name: "",
  email: "",
  message: "",
});

const submitForm = async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...form.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log("Form submitted successfully:", result);
      // Reset the form if needed
      form.value = { name: "", email: "", message: "" };
    } else {
      console.error("Form submission failed:", result);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>
