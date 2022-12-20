<template>
  <div class="mt-2 mr-2 absolute top-0 right-0">
    <button class="btn w-32 text-white bg-primary/90">Sign out</button>
  </div>

  <div class="container content-center grid h-screen place-items-center">
    <h1 class="mb-5">Dashboard</h1>
    <button class="btn btn-wide text-black bg-primary/10 mb-3">Overview</button>
    <button class="btn btn-wide text-black bg-primary/10 mb-3">Users</button>
  </div>
</template>
<style scoped>
h1 {
  color: #0f0d36;
  text-align: left;
  font-size: 40px;
  font-weight: bold;
}
.container >.btn-wide{
  width: 24rem;
}
</style>
