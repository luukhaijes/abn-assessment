<template>
  <div data-test="search-container" class="flex items-start justify-center text-center md:py-12">
    <div class="w-full overflow-hidden rounded-md bg-white text-left shadow-xl md:w-1/2 lg:w-1/3">
      <div class="border-b px-3 py-2">
        <MovieSearchInput v-model="searchQuery" />
      </div>
      <div class="flex max-h-[515px] flex-col overflow-y-auto">
        <template v-for="(show, index) in data" :key="show.id">
          <movie-search-result-item
            data-test="search-result-item"
            @click="handleCloseClick()"
            :show="show"
            :index="index"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { useShowSearch } from "@/composables/useShowSearch";
import MovieSearchResultItem from "@/components/Search/MovieSearchResultItem.vue";
import MovieSearchInput from "@/components/Search/MovieSearchInput.vue";
import { MovieSearchTeleport } from "@/tokens/movie-search-teleport";

const searchQuery = ref<string>("");

const { data } = useShowSearch(searchQuery);
const handleCloseClick = inject(MovieSearchTeleport);
</script>
