<template>
  <AppNavbar @searchClick="handleSearchClick(true)" />
  <RouterView :key="$route.fullPath" />
  <MovieSearchTeleport v-if="searchOverlayActive" @closeClick="handleSearchClick(false)" />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppNavbar from "@/components/AppNavbar.vue";
import { ref } from "vue";
import MovieSearchTeleport from "@/components/Search/MovieSearchTeleport.vue";
const searchOverlayActive = ref<boolean>(false);

const handleSearchClick = (openValue: boolean) => {
  searchOverlayActive.value = openValue;
};
</script>

<style>
@import "@/assets/base.css";
</style>
