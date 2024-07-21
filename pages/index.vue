<template>
  <div>
    <home-header />

    <div class="px-12">
      <home-banner class="mt-6 mx-20" />

      <div class="flex flex-col gap-28 mt-10">
        <home-step class="mx-20" />

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-2 row-start-1 self-start place-self-end">

          <home-about-us class="col-span-2 row-start-1 col-start-1 pt-20 mx-20" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-1 row-start-1">

          <home-colleges-recommendation class="col-span-2 row-start-1 col-start-1 mx-20" />
        </div>

        <div class="grid grid-cols-2 grid-rows-1">
          <img src="~/assets/img/grid.png" alt="grid" class="col-start-1 row-start-1">

          <home-departments-recommendation class="col-span-2 row-start-1 col-start-1 mx-20" />
        </div>

        <home-contact class="mx-20" />
      </div>
    </div>

    <home-footer class="mt-10 mx-32" />
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
