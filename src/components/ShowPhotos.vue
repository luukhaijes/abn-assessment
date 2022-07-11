<template>
  <SectionTitle> Photos </SectionTitle>
  <div class="flex flex-nowrap overflow-x-auto py-3">
    <template v-for="image in images" :key="image.id">
      <img
        class="mr-3 h-64 w-auto max-w-full flex-auto object-cover"
        v-lazy-image="image.resolutions?.medium?.url || image.resolutions.original.url"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ShowImage } from "@/interfaces/show-images.interface";
import SectionTitle from "@/components/SectionTitle.vue";

defineProps<{
  images: Array<ShowImage>;
}>();
</script>
