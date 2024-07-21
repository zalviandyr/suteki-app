<template>
  <div class="flex items-center md:justify-around justify-between  bg-white p-3 shadow-sm">
    <div class="flex items-center">
      <img src="~/assets/img/logo.png" alt="Logo" class="h-7" />
    </div>

    <div class="md:flex hidden items-center border rounded p-1 bg-gray-100 border-primary">
      <img src="~/assets/icon/search.svg" alt="search">

      <input type="text" placeholder="Cari kampus/prodi impian Anda disini..." class="bg-gray-100 text-gray-600 text-sm px-2 focus:outline-none w-96" />

      <button class="text-white bg-primary rounded py-2 px-5">Cari</button>
    </div>

    <div class="md:flex hidden items-center gap-2">
      <outline-button label="Daftar" />

      <filled-button label="Login" />
    </div>

    <div class="md:hidden flex flex-row gap-4">
      <button type="button">
        <img src="~/assets/icon/search.svg" alt="search">
      </button>

      <button type="button">
        <img src="~/assets/icon/hamburger.svg" alt="hamburger">
      </button>
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
