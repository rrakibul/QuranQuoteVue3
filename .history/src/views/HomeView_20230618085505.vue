<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <h1>Quran Q</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
