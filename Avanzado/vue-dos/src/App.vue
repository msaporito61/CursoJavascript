<script setup>

import Hijo from './components/Hijo.vue'

function oprimir () {
  alert("Desde el Padre...")
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <Hijo v-slot="{datos, mensaje}">

      <button @click="oprimir">Oprima</button>
      Mensaje del padre
      <br>
      {{datos}}

      <button @click="mensaje">Desde el hijo</button>

    </Hijo>

  </header>

</template>

<style scoped>
</style>
