<script setup>
import { Hijo } from './components/Hijo.vue'
</script>

<template>
  <div>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
      />
    </header>

    <Hijo>
      <h3>Este mensaje viene del padre </h3>
    </Hijo>
  </div>
</template>

<style scoped>
</style>
