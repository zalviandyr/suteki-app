<template>
  <div class="md:pb-0 pb-5">
    <home-header />

    <div class="md:px-12 px-0">
      <home-banner class="mt-6 md:mx-20 mx-5" />

      <div class="flex flex-col md:gap-28 gap-5 mt-10">
        <home-step class="md:mx-20 mx-5" />

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-2 row-start-1 self-start place-self-end md:inline hidden">

          <home-about-us class="col-span-2 row-start-1 col-start-1 pt-20 md:mx-20 mx-5" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-1 row-start-1 md:inline hidden">

          <home-colleges-recommendation class="col-span-2 row-start-1 col-start-1 md:mx-20 mx-5" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-1 row-start-1 md:inline hidden">

          <home-departments-recommendation class="col-span-2 row-start-1 col-start-1 md:mx-20 mx-5" />
        </div>

        <home-contact class="md:inline hidden mx-20" />
      </div>
    </div>

    <home-footer class="mt-10 md:mx-32 mx-0" />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue'
import VueAxios from 'vue-axios';
import HomeAboutUs from '~/components/home/HomeAboutUs.vue';
import HomeBanner from '~/components/home/HomeBanner.vue';
import HomeCollegesRecommendation from '~/components/home/HomeCollegesRecommendation.vue';
import HomeDepartmentsRecommendation from '~/components/home/HomeDepartmentsRecommendation.vue';
import HomeFooter from '~/components/home/HomeFooter.vue';
import HomeHeader from '~/components/home/HomeHeader.vue';
import HomeStep from '~/components/home/HomeStep.vue';

const axiosInstance = axios.create({
  baseURL: 'https://apicampusdir.civitas.id',
  headers: {
    'Api-Key': '4Qe7h5NcgCu1EPDzCKIO'
  }
})

Vue.use(VueAxios, axiosInstance)

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
