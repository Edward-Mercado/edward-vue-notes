<template>
  <div>
    <div class="router-element">
      <router-link to="/view-lists"> view lists </router-link>
      <router-link to="/"> home </router-link>
      <router-link to="/user-create"> create user </router-link>
      <router-link to="/pokemon-data"> get pokemon data </router-link>
    </div>
    <RouterView />
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-element {
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around
}
</style>