<script setup>
// import { storeToRefs } from 'pinia';
import { useContadorStore } from './store/contador';

const store = useContadorStore();
///const { contador } = storeToRefs(store);
console.log(store.contador)
</script>

<template>
  <div>
    <h1>Contador es {{ store.contador }}</h1>
    <h2>Doble es {{ store.dobleContador }}</h2>
    <button @click="store.incrementar()">Incrementar</button>
    <button @click="store.esperarYSumar">Esperar e Incrementar</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
