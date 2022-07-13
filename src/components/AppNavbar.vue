<template>
  <div class="w-100 h-16 bg-white">
    <div class="flex h-full border-b px-6 md:px-16">
      <!--    Controls-->
      <div class="absolute cursor-pointer self-center">
        <IconSearch @click="handleSearchClick()" class="w-8" />
      </div>
      <!--    logo-->
      <div class="mx-auto self-center">
        <router-link to="/">
          <img class="w-32 cursor-pointer" src="@/assets/abn-max-b.png" alt="ABN Max logo" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";

const emits = defineEmits<{
  (e: "searchClick"): void;
}>();

const handleSearchClick = () => emits("searchClick");
</script>
