<template>
  <div class="flex flex-col items-center">
    <div class="relative w-full mx-auto">
      <div class="relative h-64 overflow-hidden ">
        <div v-for="(slide, index) in slides" :key="index" :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }" class="absolute inset-0 transition-opacity duration-500 ease-in-out">
          <img :src="slide.image" :alt="slide.alt" class="object-cover w-full h-full rounded-md" />
        </div>
      </div>

    </div>

    <div class="flex flex-row gap-1 mt-2">
      <button v-for="(slide, index) in slides" :key="index" :class="{ 'bg-primary rounded-full w-6': currentSlide === index, 'bg-gray-300': currentSlide !== index }" class="w-3 h-3 rounded-full" @click="goToSlide(index)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type ISlide = {
  image: string,
  alt: string
}

export default defineComponent({
  data() {
    const slides: ISlide[] = []

    return {
      slides,
      currentSlide: 0,
    };
  },
  async fetch() {
    const response = await this.$axios.$get('/open/banner/all?position=home-banner')

    this.slides = response.data.map((item: any, index: number) => ({
      image: this.$axios.defaults.baseURL + item.image,
      alt: `banner-${index}`,
    }));
  },
  mounted() {
    setInterval(() => this.nextSlide(), 3000);

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
