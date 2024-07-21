<template>
  <div class="pb-10">
    <home-header />
    <home-banner class="mt-5" />

    <div class="flex flex-col px-20 gap-10 mt-10">
      <home-step />

      <home-about-us />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeAboutUs from '~/components/home/HomeAboutUs.vue';
import HomeBanner from '~/components/home/HomeBanner.vue';
import HomeHeader from '~/components/home/HomeHeader.vue';
import HomeStep from '~/components/home/HomeStep.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeHeader,
    HomeBanner,
    HomeStep,
    HomeAboutUs
  }
})
</script>
