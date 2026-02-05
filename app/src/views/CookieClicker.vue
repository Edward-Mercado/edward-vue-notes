<template>
    <div class="container">
      <h1>cookie clicker</h1>
      <h4>by edward mercado :)</h4>
      <h4> {{ count }} </h4>
      <img src="/cookie.png" alt="cookiee" @click="increment">
      <button @click="reset"> reset yo stuff </button>
    </div>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    const count = ref(0)
  
    function increment() {count.value++}
    function reset() {count.value = 0}
  
  </script>
  
  <style scoped>
  body {
      padding-top: 1%;
  }
    img {
      width: 200px;
      margin: 4%;
    }
    .container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
  </style>