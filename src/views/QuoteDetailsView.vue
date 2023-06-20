<script setup>
import { onMounted, ref } from 'vue';
import QuoteService from '@/services/QuoteService.js'

const quote = ref(null)
const props = defineProps({
    id: {
        required: true
    }
})

onMounted(() => {
    QuoteService
        .getQuote(props.id)
        .then((response) => {
            console.log(response)
            // quote.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
})
</script>

<template>
    <div v-if="quote">
        <h1>{{  quote.text }}</h1>
        <p>Chapter: {{ quote.chapter }}, Verse: {{ quote.verse }}</p>
    </div>
</template>