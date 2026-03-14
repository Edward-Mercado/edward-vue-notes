<template>
    <router-link :to="pkmnPath" class="card">
        <h2>{{ props.pokemon.name }}</h2>
        <h3> {{ props.index }}</h3>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
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

const pkmnPath = computed(() => {
    return `/pkmn/${props.pokemon.name}`
})

</script>

<style scoped>
    .card {
        background-color: rgba(177, 223, 235, 0.34);
        margin: 30px; 
        width: 300px;
        height: 400px;
        border-radius: 10%;
        padding: 4px;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        border: rgb(95, 170, 189) 4px solid;
    }
</style>