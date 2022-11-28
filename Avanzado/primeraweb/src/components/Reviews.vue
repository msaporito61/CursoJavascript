<template>
  <div>
  <h3>Valoracion de los clientes</h3>
  <ReviewCard
      v-for="reviewer in reviewers.results"
      :key="reviewer.login.uuid"
      :review="reviewer"
    />
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';
  export default {
    data(){
      return {
        reviewers:[]
      }
    },
    components:{
      ReviewCard
    },
    methods:{
      async getUsers(){
        try{
          const res = await fetch('https://randomuser.me/api/?results=5')
          this.reviewers = await res.json()
        } catch(err) {
          console.log(err)
        }
      }
    },
    async mounted(){
      await this.getUsers()
    }
  }
</script>

<style lang="scss" scoped>

</style>
