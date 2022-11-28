<template>
    <div class="card">
        <img class="image" :src="imagen" alt="">
        <h3 class="header">{{ card.title }}</h3>
        <p class="snippet">
            {{card.snippet}}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['card'],
        data() {
          return {
            imagen: ""
          }
        },
        methods: {
          combinar() {
            this.imagen = "/src/assets/images/"+this.card.image
          }
        },
        mounted(){
          this.combinar()
        }
    }
</script>

<style  scoped>
.card {
      width: 31.5%;
      height: 25rem;
      border: none;
      overflow: hidden;
      padding: 0;
      cursor: pointer;
  }

  .image {
      height: 65%;
      border-radius: 0.5rem;
  }

  .header {
      font-size: 1.15rem;
      margin-top: 0.4rem;
  }

  .snippet {
      color: grey
  }
</style>
