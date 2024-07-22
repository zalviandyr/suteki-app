<template>
  <div class="flex flex-col gap-2 p-4 rounded min-h-28" :class="`bg-${getRandomBackgroundColor()}`">
    <div class="flex flex-row items-center gap-2">
      <div class="w-2 h-2" :class="`bg-${getRandomTextColor()}`" />
      <span class="text-xs text-[#3C3B52]">{{ program.major }}</span>
    </div>

    <span class="font-semibold">{{ program.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IProgram } from '~/components/home/HomeDepartmentsRecommendation.vue';

export default defineComponent({
  props: {
    program: {
      type: Object as PropType<IProgram>,
      required: true,
    },
  },
  methods: {
    getRandomBackgroundColor(): string {
      const colors = [
        'pale-orange',
        'pale-cyan',
        'pale-pink',
        'pale-blue',
      ];

      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    },

    getRandomTextColor(): string {
      const colors = [
        'bright-orange',
        'bright-cyan',
        'bright-pink',
        'bright-blue',
      ];

      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }
  }
})
</script>
