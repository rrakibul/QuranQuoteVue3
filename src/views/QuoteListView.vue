<script setup>
import QuoteService from '@/services/QuoteService.js'
import { onMounted, ref } from 'vue'

const quotes = ref(null)

onMounted(() => {
  QuoteService.getQuotes()
    .then((response) => {
      // console.log(response.data.quran)
      quotes.value = response.data.chapter
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="quotes" v-if="quotes">
    <h2>Quran Quotes</h2>
    <div v-for="i in 114" :key="i">
      <RouterLink :to="{ name: 'chapter', params: { id: i } }"> Chapter: {{ i }} </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
