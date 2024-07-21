<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full mx-auto">
      <div class="overflow-hidden relative h-64 ">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }" class="absolute inset-0 transition-opacity duration-500 ease-in-out">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover rounded-md" />
        </div>
      </div>

    </div>

    <div class="flex flex-row gap-1 mt-2">
      <button v-for="(slide, index) in slides" :key="index" :class="{ 'bg-primary rounded-full w-6': currentSlide === index, 'bg-gray-300': currentSlide !== index }" class="w-3 h-3 rounded-full" @click="goToSlide(index)" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      slides: [
        { image: 'https://apicampusdir.civitas.id/images/banners/605c2c5b83a1a9994d6ee72c.jpg', alt: 'Slide 1' },
        { image: 'https://apicampusdir.civitas.id/images/banners/606eddac34473c0cc643103d', alt: 'Slide 2' },
      ],
      currentSlide: 0,
    };
  },
  mounted() {
    Vue.axios
      .get('open/banner/all?position=home-banner')
      .finally(() => {
        setInterval(() => this.nextSlide(), 3000);
      })

  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    goToSlide(index: number) {
      this.currentSlide = index;
    },
  },
});
</script>
