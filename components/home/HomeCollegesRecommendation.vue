<template>
  <div class="flex flex-col items-center gap-3">
    <span class="md:text-3xl text-2xl text-center font-bold">Rekomendasi Kampus</span>
    <span class="text-sm text-center text-[#848B9D]">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</span>

    <div class="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 mt-2">
      <div v-for="(college, index) in colleges" :key="index">
        <college-card :name="college" />
      </div>
    </div>

    <div class="flex flex-row w-full items-center justify-center gap-10 mt-5">
      <div class="h-[1px] w-full bg-[#E6E9ED] md:inline hidden" />
      <outline-button label="Kampus Lainnya (+32)" class="w-[30rem]" />
      <div class="h-[1px] w-full bg-[#E6E9ED] md:inline hidden" />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OutlineButton from '~/components/button/OutlineButton.vue';
import CollegeCard from '~/components/card/CollegeCard.vue';

export default defineComponent({
  components: { CollegeCard, OutlineButton },
  data() {
    return {
      colleges: [
        'Politeknik Negeri Padang',
        'Universitas Andalas',
        'Politeknik Negeri Padang',
        'Universitas Andalas',
      ]
    };
  }
})
</script>
