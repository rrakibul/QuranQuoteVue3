<script setup>
import QuoteCard from '../components/QuoteCard.vue'
import QuoteService from '@/services/QuoteService.js'
import { onMounted, ref } from 'vue'

const quotes = ref(null)

onMounted(() => {
  QuoteService.getQuotes()
    .then((response) => {
      console.log(response)
      quotes.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="quotes">
    <h2>Quran Quotes</h2>
    <QuoteCard v-for="quote in quotes" :key="quote.id" :quote="quote" />
  </div>
</template>

<style scoped>
.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
