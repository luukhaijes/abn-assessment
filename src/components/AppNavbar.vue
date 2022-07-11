<template>
  <div class="w-100 h-16 bg-white">
    <div class="flex h-full justify-between border-b px-3 md:px-12">
      <!--    Controls-->
      <div class="cursor-pointer self-center">
        <IconSearch @click="handleSearchClick()" class="w-8" />
      </div>
      <!--    logo-->
      <div class="self-center">
        <router-link to="/">
          <img class="w-32 cursor-pointer" src="@/assets/abn-max-b.png" />
        </router-link>
      </div>

      <!-- account -->
      <div></div>
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
