<template>
  <div class="flex w-full flex-col">
    <div v-for="genre in genres" :key="genre" class="mb-4 w-full">
      <show-carrousel :genre="genre">
        <div v-for="show in sortedShows[genre]" class="min-h-[300px] min-w-[200px]" :key="show.id">
          <show-list-item :show="show"></show-list-item>
        </div>
      </show-carrousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ShowItem } from "@/interfaces/show.interface";
import { useShowListSorted } from "@/composables/useShowListSorted";
import ShowListItem from "@/components/ShowListItem.vue";
import ShowCarrousel from "@/components/ShowCarrousel.vue";

const props = defineProps<{
  showList: Array<ShowItem>;
}>();

const { sorted: sortedShows, genres } = useShowListSorted(props.showList);
</script>

<style></style>
