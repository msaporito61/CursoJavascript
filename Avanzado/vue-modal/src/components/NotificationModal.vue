<template>
    <div class="root">
        <button @click="esVisible = true"> Abrir Modal </button>
        <teleport to='body' > 
            <div class="modal" v-if="esVisible">
                <ModalContent
                    @close="esVisible = false"
                    titulo="Este es el titulo"
                    mensaje="Este es el mendaje"
                />
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ModalContent from './ModalContent.vue';

const esVisible = ref(false)
</script>

<style scoped>
.root {
    position: relative;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal>div {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
}
</style>