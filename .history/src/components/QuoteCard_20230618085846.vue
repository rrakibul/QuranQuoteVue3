<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="event-card">
    <h2>{{ quote.title }}</h2>
    <span>@{{ quote.time }} on {{ quote.date }}</span>
  </div>
</template>