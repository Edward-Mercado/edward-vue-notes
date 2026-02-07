<template>
    <div>
        <h2 class="box"> Name: {{ animal.name }}</h2>
        <h2 class="box"> Species: {{ animal.species }}</h2>
        <h2 class="box"> Weight: {{ animal.weight }}</h2>
    </div>
</template>

<script setup>
    defineProps({
        animal: {
            type: Object,
            required:true
        }
    })
</script>

<style scoped>

div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    height: 300px;
    width: 200px;
    background-color: aqua;
    border-color: 100px solid blue;
}
</style>