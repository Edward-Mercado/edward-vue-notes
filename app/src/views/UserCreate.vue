<template>
    <div>
        <h1 v-if="loggedIn">Hello, {{ user.username }}. Your password is {{  user.password  }}</h1>
        <h1 v-else> LOG IN. please. dammit. </h1>
        <form action="submit" @submit.prevent="login(user)">
            <label for="username">Username:</label>
            <input type="text" v-model="user.username">
            <label for="password">Password:</label>
            <input type="password" v-model="user.password">
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'
    const user = reactive({username: '', password: ''})
    const loggedIn = ref(false)
    function login(user) {
        console.log(user)
        loggedIn.value = true
    }
</script>  

<style lang="scss" scoped>

</style>