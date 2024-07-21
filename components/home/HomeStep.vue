<template>
  <gradient-card>
    <div class="flex flex-row divide-x-[1px] divide-white divide-opacity-10 py-10">
      <div v-for="(step, index) in steps" :key="index" class="flex flex-row gap-4 pl-10">
        <span class="rounded-full bg-[#3BD7F0] w-7 h-7 text-sm flex items-center justify-center text-white">
          {{ index + 1 }}
        </span>

        <div class="flex flex-col text-white w-[70%] gap-1">
          <span class="text-white text-sm font-semibold">{{ step.title }}</span>

          <span class="text-[#D5E9EF] text-xs">{{ step.description }}</span>
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
