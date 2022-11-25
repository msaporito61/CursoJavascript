<template>
  <div>
  <RouterLink :to="producto" class="card-container">
    <img class="image" :src="imagen" alt="">
  </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
  export default {
    props: ["card"],
    data(){
      return {
        imagen: "",
        producto: ""
      }
    },
    methods: {
      combinar() {
        this.imagen= "/src/assets/images/" + this.card.image
        this.producto="/producto/"+this.card.id
      }
    },
    mounted() {
      this.combinar()
    },
  }
</script>

<style scoped>
.card-container {
       width: 24%;
       height: 12.5rem;
       border-radius: 0.5rem;
       overflow: hidden;
       margin-bottom: 1.5rem;
       cursor: pointer;
     }

     .image {
       width: 100%;
       height: 100%
     }
</style>
