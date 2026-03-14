<template>
    <div>
        {{ pokemon.name }}
        
    </div>
    <div>
        {{ pokemon.abilities[0].ability.name }}
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const pokemon = ref({})

async function getPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}?`)
        const data = await response.json()
        pokemon.value = data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getPokemon(route.params.id)
})

</script>

<style scoped>

</style>