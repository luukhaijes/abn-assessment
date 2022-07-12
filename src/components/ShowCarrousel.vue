<template>
  <SectionTitle class="px-3 md:px-12">
    {{ genre }}
  </SectionTitle>
  <div class="w-100 flex flex-row overflow-x-auto py-4 md:px-8">
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
