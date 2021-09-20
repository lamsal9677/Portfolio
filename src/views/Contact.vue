<template>
  <div>
    <h1>Contact me</h1>

    <p>
      I am interested in intern and full time opportunities. However, if you
      have other requests, don't hesitate to use the form
    </p>

    <div>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Email address:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Subject" label-for="input-3">
          <b-form-input
            v-model="text"
            placeholder="Enter Subject"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Message" label-for="input-4">
          <b-form-textarea
            id="input-4"
            v-model="text"
            placeholder="Enter your message"
            rows="5"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped></style>
