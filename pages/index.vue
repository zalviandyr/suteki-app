<template>
  <div class="pb-5 md:pb-0">
    <home-header />

    <div class="px-0 md:px-12">
      <home-banner class="mx-5 mt-6 md:mx-20" />

      <div class="flex flex-col gap-5 mt-10 md:gap-28">
        <home-step class="mx-5 md:mx-20" />

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="self-start hidden col-start-2 row-start-1 place-self-end md:inline">

          <home-about-us class="col-span-2 col-start-1 row-start-1 pt-20 mx-5 md:mx-20" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="hidden col-start-1 row-start-1 md:inline">

          <home-colleges-recommendation class="col-span-2 col-start-1 row-start-1 mx-5 md:mx-20" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="hidden col-start-1 row-start-1 md:inline">

          <home-departments-recommendation class="col-span-2 col-start-1 row-start-1 mx-5 md:mx-20" />
        </div>

        <home-contact class="hidden mx-20 md:inline" />
      </div>
    </div>

    <home-footer class="mx-0 mt-10 md:mx-32" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeAboutUs from '~/components/home/HomeAboutUs.vue';
import HomeBanner from '~/components/home/HomeBanner.vue';
import HomeCollegesRecommendation from '~/components/home/HomeCollegesRecommendation.vue';
import HomeDepartmentsRecommendation from '~/components/home/HomeDepartmentsRecommendation.vue';
import HomeFooter from '~/components/home/HomeFooter.vue';
import HomeHeader from '~/components/home/HomeHeader.vue';
import HomeStep from '~/components/home/HomeStep.vue';

// const axiosInstance = axios.create({
//   baseURL: 'https://apicampusdir.civitas.id',
//   headers: {
//     'Api-Key': '4Qe7h5NcgCu1EPDzCKIO'
//   }
// })

// Vue.use(VueAxios, axiosInstance)

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeHeader,
    HomeBanner,
    HomeStep,
    HomeAboutUs,
    HomeCollegesRecommendation,
    HomeDepartmentsRecommendation,
    HomeFooter
  }
})
</script>
