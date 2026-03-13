<template>
    <router-link :to="`/pkmn/${props.index}`">
        <h2>{{ props.pokemon.name }}</h2>
        <h3> {{ props.index }}</h3>
    </router-link>
</template>

<script setup>
const props = defineProps({
    pokemon: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
})

</script>

<style scoped>
    .card {
        background-color: aquamarine;
    }
</style>