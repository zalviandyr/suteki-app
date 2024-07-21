<template>
  <div class="flex flex-row gap-10">
    <div class="flex flex-col gap-2 flex-grow">
      <span class="text-black text-3xl font-bold">{{ title }}</span>
      <span>{{ description }}</span>
    </div>

    <div class="grid grid-cols-2 w-[140rem] gap-5">
      <button v-for="action in actions" :key="action" class="inline-block text-sm px-4 py-4 rounded-md w-full" :class='`bg-${action.bgColor}`'>
        <div class="flex flex-row items-center gap-3">
          <div :class='`bg-${action.iconColor}`' class="p-2 rounded-md">
            <img src="~/assets/icon/about-us.png" alt="icon" />
          </div>

          <span class="font-semibold flex-grow text-left text-xs">{{ action.label }}</span>

          <img :src='action.arrow' alt="arrow" />
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      title: 'Tentang Kami',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, suspendisse turpis sed convallis diam id. Vestibulum at eget pellentesque ullamcorper cras scelerisque arcu. Vel ornare bibendum porta faucibus. Eu semper eget rhoncus aenean eu eget purus. Euismod tincidunt posuere vulputate nec cras facilisis ac. Ultrices vulputate non ut adipiscing viverra.',
      actions: [
        { label: 'Kampus', bgColor: 'pale-orange', iconColor: 'bright-orange', arrow: require('~/assets/icon/arrow1.svg') },
        { label: 'Jurusan', bgColor: 'pale-cyan', iconColor: 'bright-cyan', arrow: require('~/assets/icon/arrow2.svg') },
        { label: 'Pendaftaran', bgColor: 'pale-pink', iconColor: 'bright-pink', arrow: require('~/assets/icon/arrow3.svg') },
        { label: 'Uji Kompetensi', bgColor: 'pale-blue', iconColor: 'bright-blue', arrow: require('~/assets/icon/arrow4.svg') },
      ]
    };
  }
})
</script>
