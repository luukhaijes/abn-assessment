<template>
  <router-link :to="'/show/' + show.id">
    <div class="item">
      <div class="item__inner custom-bg-100-100" v-lazy-image="show.image.medium">
        <div class="item__content">
          <icon-play class="z-20 h-12 w-12 self-center" fill="#fff" />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { ShowItem } from "@/interfaces/show.interface";
import IconPlay from "./icons/IconPlay.vue";

defineProps<{
  show: ShowItem;
}>();
</script>

<style scoped>
.custom-bg-100-100 {
  background-size: 100% 100%;
}

.item {
  @apply relative z-10 clear-both h-full cursor-pointer p-3;
}

.item__inner {
  @apply flex h-full rounded-md bg-no-repeat transition duration-200 hover:scale-110 hover:shadow-2xl;
}

.item__content {
  @apply flex
  h-full
  w-full
  items-end
  justify-center
  rounded-md
  bg-gradient-to-t
  from-black
  opacity-0
  transition
  duration-200;
}

.item__content:hover {
  @apply opacity-100;
}
</style>
