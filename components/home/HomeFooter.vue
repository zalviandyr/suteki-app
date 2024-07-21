<template>
  <div>
    <div class="flex-row items-center justify-between bg-white p-3 shadow-sm flex-grow md:flex hidden">
      <div class="items-center md:flex hidden">
        <img src="~/assets/img/logo.png" alt="Logo" class="h-7" />
      </div>

      <span class="text-sm text-[#848B9D]">Copyright © 2020 Kampus Jabar Banten</span>
    </div>

    <div class="md:hidden flex flex-col items-center gap-4">
      <div class="h-[1px] w-full bg-[#E6E9ED]" />

      <span class="text-sm text-[#848B9D]">Copyright © 2020 Kampus Jabar Banten</span>

      <filled-button label="Download Aplikasi" class="w-fit md:hidden inline" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilledButton from '~/components/button/FilledButton.vue'

export default defineComponent({
  components: { FilledButton }
})
</script>

FilledButton
