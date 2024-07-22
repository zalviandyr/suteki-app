<template>
  <div class="flex flex-col items-center gap-3">
    <span class="text-2xl font-bold text-center md:text-3xl">Rekomendasi Kampus</span>
    <span class="text-sm text-center text-[#848B9D]">Memberikan sistim pelayanan untuk para calon mahasiswa Jawa Barat dan Banten</span>

    <div class="grid grid-cols-2 gap-5 mt-2 md:grid-cols-4 md:gap-10">
      <div v-for="(college, index) in colleges" :key="index">
        <college-card :college="college" />
      </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full gap-10 mt-5">
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

export type ICollege = {
  id: string,
  name: string,
  admission: string,
  is_has_scholarship: boolean,
  study_program_accreditations: string,
  thumbnail: string,
  logo: string,
  is_state: boolean,
  address: string,
  min_registration_fee: number,
}

export default defineComponent({
  components: { CollegeCard, OutlineButton },
  data() {
    const colleges: ICollege[] = []

    return { colleges };
  },
  async fetch() {
    // get all college data
    const collegesData = await this.$axios.$get('/open/collegestudyprogram/all');
    const colleges = collegesData[0].data

    // get college detail
    for (const college of colleges) {
      let collegeData = await this.$axios.$get(`/open/college/${college.id}`)
      collegeData = collegeData[0];


      this.colleges.push({
        id: collegeData.id,
        name: collegeData.name,
        admission: collegeData.admission,
        is_has_scholarship: collegeData.is_has_scholarship,
        study_program_accreditations: collegeData.study_program_accreditations[0].accreditation,
        thumbnail: this.$axios.defaults.baseURL + collegeData.thumbnail,
        logo: this.$axios.defaults.baseURL + collegeData.logo,
        is_state: collegeData.education_type === 'Negeri',
        address: collegeData.address,
        min_registration_fee: collegeData.min_registration_fee.toLocaleString(),
      })
    }
  }
})
</script>
