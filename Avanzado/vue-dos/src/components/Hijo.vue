<template>
  <div>
    <h3>Hola desde el Hijo</h3>
    <slot
      :datos="datos"
      :mensaje="mensaje"
    />
  </div>
</template>

<script setup>
const datos = "Viene de datos...."

function mensaje () {
  window.alert("Esto viene del hijo")
}
</script>

<style>
</style>