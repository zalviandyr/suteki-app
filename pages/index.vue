<template>
  <div>
    <home-header />
    <home-banner class="mt-5" />

    <div class="px-20 mt-10">
      <home-step />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeBanner from '~/components/home/HomeBanner.vue';
import HomeHeader from '~/components/home/HomeHeader.vue';
import HomeStep from '~/components/home/HomeStep.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeHeader,
    HomeBanner,
    HomeStep
  }
})
</script>
