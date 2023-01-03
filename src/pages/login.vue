<template>
  <div class="container content-center grid h-screen place-items-center">
    <h1 class="text-center mb-3">Welcome back!</h1>
    <p class="mb-8">
      Log in below to see how the My Property Stats is currently performing.
    </p>
    <div class="form-control">
      <label class="label block text-gray-700 text-sm font-bold">
        <span class="label-text">Email address</span>
      </label>
      <input type="text" class="input bg-accent mb-4" />
    </div>
    <div class="form-control">
      <label class="label block text-gray-700 text-sm font-bold">
        <span class="label-text">Password</span>
      </label>
      <input type="password" class="input bg-accent mb-8" />
    </div>
    <div class="mb-4">
      <button class="btn btn-wide text-white bg-primary normal-case" @click="onLogIn">
        Log in
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onLogIn() {
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>
<style scoped>
h1 {
  color: #0f0d36;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
}
input {
  width: 452px;
}

button {
  width: 452px;
}

p {
  width: 452px;
  text-align: center;
}
</style>
