<template>
  <div>
    <home-header />
    <home-banner class="mt-5" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeBanner from '~/components/home/HomeBanner.vue';
import HomeHeader from '~/components/home/HomeHeader.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HomeHeader,
    HomeBanner,
  }
})
</script>
