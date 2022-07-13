<template>
  <div class="flex flex-nowrap overflow-x-auto py-3">
    <template v-for="image in images" :key="image.id">
      <template v-if="!image.main">
        <img
          class="mr-3 h-64 w-auto max-w-full flex-auto object-cover"
          v-lazy-image="image.resolutions?.medium?.url || image.resolutions.original.url"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ShowImage } from "@/interfaces/show-images.interface";

defineProps<{
  images: Array<ShowImage>;
}>();
</script>
