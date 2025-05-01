<!-- Prompt Used: Create a basic Vue 3 form to submit user data (name and email) -->

<template>
  <div>
    <h2>User Form</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
    <div v-if="submitted">
      <p>Form submitted for: {{ name }} ({{ email }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Submitted:", this.name, this.email);
      this.submitted = true;
    },
  },
};
</script>

<style scoped>
input {
  margin: 5px;
}
</style>
