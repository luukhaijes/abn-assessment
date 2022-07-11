<template>
  <div>
    <SectionTitle class="mb-6">
      <slot />
    </SectionTitle>
    <slot name="content" />
  </div>
</template>
<script setup lang="ts">
import SectionTitle from "./SectionTitle.vue";
</script>