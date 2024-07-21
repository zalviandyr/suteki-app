<template>
  <div class="flex flex-col p-4 gap-2 rounded" :class="`bg-${getRandomBackgroundColor()}`">
    <div class="flex flex-row items-center gap-2">
      <div class="w-2 h-2" :class="`bg-${getRandomTextColor()}`" />
      <span class="text-xs text-[#3C3B52]">{{ title }}</span>
    </div>

    <span class="font-semibold">{{ description }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
