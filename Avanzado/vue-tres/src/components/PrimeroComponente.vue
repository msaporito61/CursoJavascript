<template>
  <div>
    <h2>Options API </h2>
    {{ contador }}

    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
    <div>
      <input
        type="text"
        @change="manejador"
      />
    </div>
  </div>
</template>

<script>
/*
name: "Primero",
props: {
    nombre: String,
    mensaje: { type: String, required: true },
    id: [Number, String]
  },
*/
export default {

  data () {
    return {
      contador: 1,
      saludo: ""
    }
  },

  methods: {
    incrementar () {
      this.contador++
    },
    decrementar () {
      this.contador--
    },
    manejador (event) {
      console.log(event.target.value)
    }
  },
  computed: {
    saludos () {
      return mensaje + " hasta la vista, baby!!!"
    },
    prepararSaludo: {
      get () {
        return this.saludos.toUpperCase()
      },
      set (nuevoDato) {
        this.saludo = nuevoDato.toUpperCase()
      }
    }
  },
  mounted () {
    this.incrementar()
  }

}
</script>

<style>
</style>