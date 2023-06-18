<script setup>
import { ref } from "vue";

defineProps({
    quote: {
        type: Object,
        'required': true
    },
})
</script>

<template>
  <div class="event-card">
    <h2>{{ quote.title }}</h2>
    <span>@{{ quote.time }} on {{ quote.date }}</span>
  </div>
</template>

<style scoped>
.quote-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>