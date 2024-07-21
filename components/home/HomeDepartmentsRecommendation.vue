<template>
  <div class="flex flex-col items-center gap-3">
    <span class="md:text-3xl text-2xl font-bold text-center">Rekomendasi Jurusan/Prodi</span>
    <span class="text-sm text-[#848B9D] text-center">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</span>

    <div class="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 mt-2">
      <div v-for="(department, index) in departments" :key="index">
        <department-card :title="department.title" :description="department.description" />
      </div>
    </div>

    <div class="flex flex-row w-full items-center justify-center gap-10 mt-5">
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

export default defineComponent({
  components: { DepartmentCard, OutlineButton },
  data() {
    return {
      departments: [
        {
          title: 'Seni, Desain & Musik',
          description: 'Desain Komunikasi Visual',
        },
        {
          title: 'Pariwisata',
          description: 'Perhotelan',
        },
        {
          title: 'Teknik Komputer & Informatika',
          description: 'Teknik Informatika',
        },
        {
          title: 'Matematika & IPA',
          description: 'Matematika',
        },
      ]
    };
  }
})
</script>
