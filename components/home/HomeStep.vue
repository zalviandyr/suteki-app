<template>
  <gradient-card>
    <div class="grid md:grid-cols-4 grid-cols-2 divide-x-[1px] divide-white divide-opacity-10 md:py-10 py-5">
      <div v-for="(step, index) in steps" :key="index" class="flex flex-row gap-4 md:pl-10 pl-5 md:py-0 py-3">
        <span class="rounded-full bg-[#3BD7F0] w-7 h-7 text-sm flex items-center justify-center text-white">
          {{ index + 1 }}
        </span>

        <div class="flex flex-col text-white w-[70%] gap-1">
          <span class="text-white text-sm font-semibold">{{ step.title }}</span>

          <span class="md:inline hidden text-[#D5E9EF] text-xs">{{ step.description }}</span>
        </div>
      </div>
    </div>
  </gradient-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GradientCard from '~/components/card/GradientCard.vue'

export default defineComponent({
  components: { GradientCard },
  data: function () {
    return {
      steps: [
        { title: 'Cari Kampus & Prodi', description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.' },
        { title: 'Bandingkan', description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.' },
        { title: 'Uji Kompetensi', description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.' },
        { title: 'Daftar', description: 'Consectetur adipiscing elit. Urna amet hac senectus in consequat orci duis pellentesque.' },
      ]
    };
  }
})
</script>
