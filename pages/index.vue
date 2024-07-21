<template>
  <div>
    <home-header />
    <banner />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Banner from '~/components/Banner.vue';
import Header from '~/components/Header.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    'home-header': Header,
    Banner
  }
})
</script>
