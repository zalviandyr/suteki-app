<template>
  <div class="grid grid-cols-1 grid-rows-1">
    <img :src="college.thumbnail" alt="college-card" class="object-cover col-start-1 row-start-1 rounded-lg w-72 h-52">

    <div class="flex flex-col col-start-1 row-start-1 gap-1 px-2 py-3 right-2">
      <div class="flex flex-col gap-1 min-h-20">
        <div v-if="college.is_has_scholarship" class="bg-[#5471ED] rounded-full pl-4 pr-1 py-[1px] text-xs text-white flex flex-row items-center gap-2 w-fit">
          <span class="flex-grow">Beasiswa</span>
          <div class="bg-[#3A5AE3] rounded-full w-5 h-5 flex items-center justify-center">
            <img src="~/assets/icon/checklist.svg" alt="checklist">
          </div>
        </div>

        <div class="bg-[#E83158] rounded-full pl-4 pr-1 py-[1px] text-xs text-white flex flex-row items-center gap-2 w-fit">
          <span class="flex-grow">Terakreditasi</span>
          <span class="bg-[#F35577] rounded-full w-5 h-5 flex items-center justify-center">
            {{ college.study_program_accreditations }}
          </span>
        </div>
      </div>

      <div class="p-2 bg-white rounded w-fit">
        <img :src="college.logo" alt="college-icon" class="object-contain w-8 h-8">
      </div>

      <div class="flex flex-col w-full gap-2 p-3 mt-5 bg-white rounded shadow-md min-h-52">
        <span class="text-sm font-semibold">
          {{ college.name }}
        </span>

        <div class="flex flex-row">
          <img src="~/assets/icon/map.svg" alt="map" class="mr-3" />
          <!-- Di harcode karena alamat dari API terlalu panjang -->
          <span class="text-xs text-[#3A5AE3]">Indonesia</span>
        </div>

        <div class="flex flex-row">
          <img src="~/assets/icon/line.svg" alt="line" class="mr-3" />
          <span class="text-xs text-[#0AA8C1] font-semibold">Negeri</span>
        </div>

        <div class="flex flex-col">
          <span class="text-xs text-[#7E8CA0]">Uang masuk mulai dari</span>
          <span class="text-sm font-semibold">Rp {{ college.min_registration_fee }}</span>
        </div>

        <div class="content-end flex-grow w-full">
          <a :href="college.admission" target="_blank" class="flex flex-row items-center gap-2 px-4 py-2 text-xs text-white rounded-full bg-primary w-fit">
            <img src="~/assets/icon/globe.svg" alt="globe" />
            Pendaftaran Online
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ICollege } from '~/components/home/HomeCollegesRecommendation.vue'

export default defineComponent({
  props: {
    college: {
      type: Object as PropType<ICollege>,
      required: true,
    },
  }
})
</script>
