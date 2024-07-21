<template>
  <gradient-card>
    <div class="flex flex-row py-10 px-5 text-white justify-between">
      <div class="flex flex-col w-[40%] gap-2">
        <span class="font-semibold text-lg">Tentang Kami</span>
        <span>Membantu siswa mencari dan membandingkan informasi perguruan tinggi di Jawa Barat dan Banten agar bisa meraih impian lewat kampus idaman dan jurusan yang sesuai dengan passion.</span>
      </div>

      <div class="flex flex-col w-[20%] gap-2">
        <span class="font-semibold text-lg">Layanan</span>
        <a href="#">Daftar Kampus</a>
        <a href="#">Daftar Prodi / Jurusan</a>
        <a href="#">Artikel / Berita</a>
      </div>

      <div class="flex flex-col w-[20%] gap-2">
        <span class="font-semibold text-lg">Kontak Kami</span>

        <div class="flex flex-row">
          <div class="w-7">
            <img src="~/assets/icon/email.svg" alt="email">
          </div>
          <span class="text-sm">email@company.com</span>
        </div>

        <div class="flex flex-row">
          <div class="w-7">
            <img src="~/assets/icon/phone.svg" alt="phone">
          </div>
          <span class="text-sm">+62 32984343234</span>
        </div>

        <filled-button label="Download Aplikasi" class="mt-4 !text-black bg-white" />
      </div>
    </div>
  </gradient-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilledButton from '~/components/button/FilledButton.vue'
import GradientCard from '~/components/card/GradientCard.vue'

export default defineComponent({
  components: { GradientCard, FilledButton },
})
</script>

FilledButton
