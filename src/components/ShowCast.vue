<template>
  <template v-if="cast?.length">
    <div class="flex flex-row flex-wrap justify-around md:flex-nowrap md:justify-between">
      <div v-for="cast in mainCast" class="w-32 text-center" :key="cast.person.id">
        <img
          :src="cast.person.image.medium"
          :alt="'Cast picture of ' + cast.person.name"
          class="mb-2 aspect-square w-full rounded-full object-cover"
        />
        <p class="text-sm font-bold">{{ cast.person.name }}</p>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { CastItem } from "@/interfaces/cast.interface";
import { computed } from "vue";

const props = defineProps<{
  cast: Array<CastItem>;
}>();

const removeDuplicateCastMembers = (arr: CastItem[]): Array<CastItem> => {
  const names = new Set();

  return arr.filter((castItem) => {
    const isDuplicate = names.has(castItem.person.name.toLowerCase());

    names.add(castItem.person.name.toLowerCase());

    return !isDuplicate;
  });
};

const mainCast = computed(() => removeDuplicateCastMembers(props.cast).slice(0, 5));
</script>
