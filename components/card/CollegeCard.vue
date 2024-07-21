<template>
  <div class="relative pb-20">
    <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="college-card" class="object-cover rounded-lg h-52">

    <div class="flex flex-col absolute top-2 left-2 right-2 gap-1">
      <div class="bg-[#5471ED] rounded-full pl-4 pr-1 py-[1px] text-xs text-white flex flex-row items-center gap-2 w-fit">
        <span class="flex-grow">Kampus Partner</span>
        <div class="bg-[#3A5AE3] rounded-full w-5 h-5 flex items-center justify-center">
          <img src="~/assets/icon/checklist.svg" alt="checklist">
        </div>
      </div>

      <div class="bg-[#E83158] rounded-full pl-4 pr-1 py-[1px] text-xs text-white flex flex-row items-center gap-2 w-fit">
        <span class="flex-grow">Terakreditasi</span>
        <span class="bg-[#F35577] rounded-full w-5 h-5 flex items-center justify-center">A</span>
      </div>

      <div class="p-2 bg-white rounded w-fit mt-7">
        <img src="~/assets/img/pnp.png" alt="college-icon" class="w-8 h-8 object-contain">
      </div>

      <div class="bg-white mt-5 w-full shadow-md rounded p-3 flex flex-col gap-2">
        <span class="font-semibold text-sm">
          {{ name }}
        </span>

        <div class="flex flex-row">
          <img src="~/assets/icon/map.svg" alt="map" class="mr-3" />
          <span class="text-xs text-[#3A5AE3]">Padang, Sumatera Barat</span>
        </div>

        <div class="flex flex-row">
          <img src="~/assets/icon/line.svg" alt="line" class="mr-3" />
          <span class="text-xs text-[#0AA8C1] font-semibold">Negeri</span>
        </div>

        <div class="flex flex-col">
          <span class="text-xs text-[#7E8CA0]">Uang masuk mulai dari</span>
          <span class="text-sm font-semibold">Rp 350.000</span>
        </div>

        <button type="button" class="bg-primary text-xs rounded-full text-white w-fit px-4">
          Pendaftaran Online
        </button>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    }
  }
})
</script>
