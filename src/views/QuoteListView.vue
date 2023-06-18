<script setup>
import QuoteCard from '../components/QuoteCard.vue'
import { ref } from 'vue'

const quotes = ref([
  {
    id: 100,
    category: 'animal',
    title: 'Show Bull Dog',
    description: 'this is a ferosous dog',
    date: '21 June, 2023',
    time: '8:45 AM'
  },
  {
    id: 101,
    category: 'animal',
    title: 'Show Pushy Cat',
    description: 'this is a lovely cat',
    date: '22 June, 2023',
    time: '8:45 AM'
  },
  {
    id: 102,
    category: 'animal',
    title: 'Show Cow',
    description: 'this is a milking cow',
    date: '23 June, 2023',
    time: '8:45 AM'
  }
])
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
