<template>
  <div>
    <Hero />
    <LargeCardDisplay
      v-for="cardInfo in largeCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo" />
    <SmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue"
import LargeCardDisplay from "../components/LargeCardDisplay.vue"
import { largeCardSections, smallCardSections } from "../assets/data.js"
import SmallCardDisplay from "../components/SmallCardDisplay.vue";

</script>

<style>

</style>
