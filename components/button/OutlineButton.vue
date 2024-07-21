<template>
  <button type="button" class="text-primary border border-primary py-2 px-5 rounded">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    }
  },
})
</script>
