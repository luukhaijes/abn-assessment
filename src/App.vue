<template>
  <AppNavbar @searchClick="handleSearchClick(true)" />
  <RouterView :key="$route.fullPath" />
  <MovieSearch v-if="searchOverlayActive" @closeClick="handleSearchClick(false)" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppNavbar from "@/components/AppNavbar.vue";
import MovieSearch from "@/components/Search/MovieSearch.vue";
import { ref } from "vue";
const searchOverlayActive = ref<boolean>(false);

const handleSearchClick = (openValue: boolean) => {
  searchOverlayActive.value = openValue;
};
</script>

<style>
@import "@/assets/base.css";
</style>
