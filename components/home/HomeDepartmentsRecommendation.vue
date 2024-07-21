<template>
  <div class="flex flex-col items-center gap-3">
    <span class="text-3xl font-bold">Rekomendasi Jurusan/Prodi</span>
    <span class="text-sm text-[#848B9D]">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</span>

    <div class="grid grid-cols-4 gap-10 mt-2">
      <div v-for="(department, index) in departments" :key="index">
        <department-card :title="department.title" :description="department.description" />
      </div>
    </div>

    <div class="flex flex-row w-full items-center justify-center gap-10 mt-5">
      <div class="h-[1px] w-full bg-[#E6E9ED]" />
      <outline-button label="Jurusan Lainnya (+32)" class="w-[30rem]" />
      <div class="h-[1px] w-full bg-[#E6E9ED]" />
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
