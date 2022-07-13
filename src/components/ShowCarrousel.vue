<template>
  <SectionTitle class="px-3 md:px-16">
    {{ genre }}
  </SectionTitle>
  <div class="w-100 -mb-4 flex flex-row overflow-x-auto py-4 pb-8 md:px-12">
    <slot />
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

defineProps<{
  genre: string;
}>();
</script>
