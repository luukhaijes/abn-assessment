<template>
  <router-link :to="'/show/' + show.id">
    <div class="h-34 mb-2 flex w-full flex-row border-b px-4 pb-2" :class="{ 'pt-2': index === 0 }">
      <img v-if="show.image" class="w-20 rounded" :src="show.image.medium" />
      <div class="flex h-full justify-center rounded bg-gray-300 px-4" v-else>
        <IconBan class="h-full w-8" fill="#fff" />
      </div>
      <div class="px-4">
        <h2 class="text-base font-bold">{{ show.name }}</h2>
        <p class="pb text-sm">
          <MovieSummary :summary="show.summary" :cut-of-length="160"></MovieSummary>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { ShowItem } from "@/interfaces/show.interface";
import IconBan from "@/components/icons/IconBan.vue";
import MovieSummary from "@/components/MovieSummary.vue";

defineProps<{
  show: ShowItem;
  index: number;
}>();
</script>
