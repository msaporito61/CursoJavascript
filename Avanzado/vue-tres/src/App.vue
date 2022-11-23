<script setup>
import PrimeroComponente from './components/PrimeroComponente.vue'
import SegundoComponente from './components/SegundoComponente.vue'

const mensaje = "Esto es una mensaje"

const html = "<h1>Esto es html</h1>"

const id = 15

const ok = true

const estaHabilitado = false;

const objeto = {
  id: "container",
  class: "exportacion"
}

const url = "http://www.bing.com"

/*
async function getPosts () {
  const datos = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
  return datos
}
async const datos = await getPosts()
*/
</script>

<template>
  <div>
    Hola mundo!!!
    {{ mensaje }}
    {{ html }}

    <p>
      usando v-html : <span v-html="html"></span>
    </p>

    <!-- <div :"id"></div> -->
    <div v-bind="objeto">Prueba</div>
    <div class="container exportacion"></div>
    <div>
      <button :disabled="estaHabilitado">Boton</button>
    </div>

    {{ id + 20 }}

    {{ ok ? 'SI' : 'NO'}}

    {{ mensaje.split('').reverse().join('') }}
    <!-- <div>
      <span :title="tituloFecha(date)">
        {{  fechaFormateda(date) }}
      </span>
    </div> -->
    <p v-if="estaHabilitado">

    </p>
    <p v-else>
      no me ven...
    </p>
    <div>
      <!-- <a :[atributoDinamico]="url"> Sorpresa </a> -->
      <a :href="url"> Sorpresa </a>
      <!--  <a v-on:[evento]="cualquiera">...</a>
      <a @[evento]="cualquiera">...</a> -->
      <!-- <a :['destino'+ var]="value"> ... </a> -->
    </div>
    <!-- <button @click="getPosts">Leer</button>-->
    <!--
    <form @submit.prevent="onSubmit">

    </form>
    -->
    <PrimeroComponente />
    <SegundoComponente />
  </div>
</template>

<style scoped>
</style>
