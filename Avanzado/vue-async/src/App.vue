<script setup>
import { ref, defineAsyncComponent } from "vue"

const LoginPopup = defineAsyncComponent(() =>
  import('./components/LoginPopup.vue')
);

/*
const NuevoLoginPopup = defineAsyncComponent({
  loader: () => import('./components/LoginPopup.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 1000,
  timeout: 3000,
  onError(error, retry, fail, attemtps){
    if(error.message.match(/fetch/) && attemtps <= 3){
      retry()
    } else {
      fail()
    }
  }
}); */
const show= ref(false)
</script>

<template>
 <div>
  <template v-if="show">
    <LoginPopup />
  </template>
  <button @click="(show = true)" >Show Popup</button>
 </div>
</template>

<style scoped>
button {
  @apply text-center mx-auto bg-blue-300 w-40 block mt-40
}
</style>
