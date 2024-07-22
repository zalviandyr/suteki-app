<template>
  <div class="flex flex-col items-center gap-3">
    <span class="text-2xl font-bold text-center md:text-3xl">Rekomendasi Jurusan/Prodi</span>
    <span class="text-sm text-[#848B9D] text-center">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</span>

    <div class="grid grid-cols-2 gap-5 mt-2 md:grid-cols-4 md:gap-10">
      <div v-for="(program, index) in programs" :key="index">
        <department-card :program="program" />
      </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full gap-10 mt-5">
      <div class="h-[1px] w-full bg-[#E6E9ED] md:inline hidden" />
      <outline-button label="Jurusan Lainnya (+32)" class="w-[30rem]" />
      <div class="h-[1px] w-full bg-[#E6E9ED] md:inline hidden" />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OutlineButton from '~/components/button/OutlineButton.vue';
import DepartmentCard from '~/components/card/DepartmentCard.vue';

export type IProgram = {
  name: string;
  major: string;
}

export default defineComponent({
  components: { DepartmentCard, OutlineButton },
  data() {
    const programs: IProgram[] = []

    return { programs };
  },
  async fetch() {
    const programsData = await this.$axios.$get('/open/studyprogram/all?perPage=8')
    const programs = programsData.data;

    for (const program of programs) {
      let programData = await this.$axios.$get(`/open/studyprogram/${program.id}`);
      programData = programData[0];

      this.programs.push({
        name: programData.name,
        major: programData.major,
      });
    }
  },
})
</script>
