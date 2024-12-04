<template>
  <div>
    <h1 class="text-xl bg-red-600">Image Carousel</h1>
    <ImageCarousel :images="images" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageCarousel from './components/ImageCarousel.vue';

const images = ref([
  'https://picsum.photos/1600/900?random=1',
  'https://picsum.photos/1600/900?random=2',
  'https://picsum.photos/1600/900?random=3',
  'https://picsum.photos/1600/900?random=4',
  'https://picsum.photos/1600/900?random=5'
]);
</script>