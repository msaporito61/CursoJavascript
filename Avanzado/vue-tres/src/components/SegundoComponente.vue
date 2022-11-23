<template>
  <div>
    <h2>Composition API</h2>
    {{ vidas }}

    <!-- {{ props.id }} -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const vidas = ref(3)

const doble = computed(() => vidas.value * 2)

/*
const props = defineProps({
  id: Number,
  mensaje: 'Hola!'
})
*/
function saludo () {
  return "Hola como te va"
}

function manejador (event) {
  console.log(event.target.value)
}

// CSR
onMounted(() => {
  console.log(vidas.value)
})

/*
// SSR
beforeCreate(() => {
  console.log(vidas.value)
}) */
</script>

<style>
</style>