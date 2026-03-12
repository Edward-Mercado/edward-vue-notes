<template>
    <PokemonCard v-for="mon, index in pokemon" 
    :key="index" :pokemon="mon" :index="index+1">
    </PokemonCard>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'

const pokemon = ref([])

async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?')
        const data = await response.json()
        pokemon.value = data.results
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getPokemon()
})
</script>

<style scoped>

</style>