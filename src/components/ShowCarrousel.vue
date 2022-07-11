<template>
  <SectionTitle class="px-3 md:px-12">
    {{ genre }}
  </SectionTitle>
  <div class="w-100 flex flex-row overflow-x-auto md:px-8 py-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

defineProps<{
  genre: string;
}>();
</script>

<style></style>
