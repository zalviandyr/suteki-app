<template>
  <button type="button" class="text-white bg-primary py-2 px-5 rounded">{{ label }}</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilledButton',
  props: {
    label: {
      type: String,
      default: '',
    },
  }
})
</script>
