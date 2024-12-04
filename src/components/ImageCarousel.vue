<template>
    <div class="carousel relative max-w-2xl mx-auto">
        <img :src="currentImage" alt="Image Carousel" class="w-full h-auto" />
        <button @click="prevImage"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &larr;
        </button>
        <button @click="nextImage"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &rarr;
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';

interface Props {
    images: string[];
}

const props = defineProps<Props>();

const currentImageIndex = ref(0);
const currentImage = ref(props.images[currentImageIndex.value]);

const updateImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
    currentImage.value = props.images[currentImageIndex.value];
};

const prevImage = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
    currentImage.value = props.images[currentImageIndex.value];
};

const nextImage = () => {
    updateImage();
};

let intervalId: number;

onMounted(() => {
    intervalId = setInterval(updateImage, 3000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});

watch(() => props.images, () => {
    currentImageIndex.value = 0;
    currentImage.value = props.images[currentImageIndex.value];
});
</script>