<script setup>
defineProps({
  quote: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="event-card">
    <img
      :src="'https://everyayah.com/data/images_png/' + quote.chapter + '_' + quote.verse + '.png'"
      :alt="'Chapter: ' + quote.chapter + ', Verse: ' + quote.verse"
    />
    <audio
      id="newMediaPlayer"
      :src="
        'https://everyayah.com/data/AbdulSamad_64kbps_QuranExplorer.Com/' +
        quote.chapter.toString().padStart(3, '0') +
        quote.verse.toString().padStart(3, '0') +
        '.mp3'
      "
      controls="controls"
    ></audio>
    <h2>{{ quote.text }}</h2>
    <span>Verse: {{ quote.verse }}</span>
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
.quote-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
