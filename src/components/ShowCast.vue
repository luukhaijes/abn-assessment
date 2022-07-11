<template>
  <template v-if="cast?.length">
    <SectionTitle class="mb-6"> Starring</SectionTitle>
    <div class="flex flex-row flex-wrap justify-around md:justify-between md:flex-nowrap">
      <div v-for="cast in mainCast" class="w-32 text-center" :key="cast.person.id">
        <img :src="cast.person.image.medium" :alt="'Cast picture of ' + cast.person.name"
             class="mb-2 aspect-square w-full rounded-full object-cover" />
        <p class="text-sm font-bold">{{ cast.person.name }}</p>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import type { CastItem } from "@/interfaces/cast.interface";
import { computed } from "vue";

const props = defineProps<{
  cast: Array<CastItem>;
}>();

const mainCast = computed(() => props.cast.slice(0, 5));
</script>
