<template>
    <div>
        <h2>{{ titulo }}</h2>
        <p>{{ mensaje }}</p>
        <button @click="$emit('close')">Cerrar</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    titulo: String,
    mensaje: String,
})

defineEmits("close")
</script>

<style  scoped>

</style>