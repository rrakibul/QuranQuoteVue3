<script setup>
import QuoteCard from '../components/QuoteCard.vue'
import QuoteService from '@/services/QuoteService.js'
import { onMounted, ref } from 'vue'

const quotes = ref(null)
const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  QuoteService.getChapter(props.id)
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
    <h2>Chapter: {{ props.id }}</h2>
    <QuoteCard v-for="quote in quotes" :key="quote.chapter+'-'+quote.verse" :quote="quote" />
  </div>
</template>

<style scoped>
.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
