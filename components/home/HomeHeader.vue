<template>
  <div class="flex items-center justify-around bg-white p-3 shadow-sm">
    <!-- Logo Section -->
    <div class="flex items-center">
      <img src="~/assets/img/logo.png" alt="Logo" class="h-7" />
    </div>

    <!-- Search Section -->
    <div class="flex items-center border rounded p-1 bg-gray-100 border-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary ml-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M16.65 9.75a6.9 6.9 0 11-13.8 0 6.9 6.9 0 0113.8 0z" />
      </svg>

      <input type="text" placeholder="Cari kampus/prodi impian Anda disini..." class="bg-gray-100 text-gray-600 text-sm px-2 focus:outline-none w-96" />

      <button class="text-white bg-primary rounded py-2 px-5">Cari</button>
    </div>

    <!-- Button Section -->
    <div class="flex items-center gap-2">
      <outline-button label="Daftar" />

      <filled-button label="Login" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilledButton from '~/components/button/FilledButton.vue';
import OutlineButton from '~/components/button/OutlineButton.vue';

export default defineComponent({
  components: {
    OutlineButton,
    FilledButton
  },
});
</script>
