<script setup>
import { ref } from 'vue'
import { quote-card }
</script>

<template>
  <h1>Quran Quotes</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
