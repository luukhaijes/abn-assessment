<template>
  <template v-if="summary">
    {{ changedSummary }}
  </template>
  <template v-else>
    <span class="font-bold">No summary available</span>
  </template>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { stripHTML } from "@/utils/strip-html";

const props = defineProps<{
  summary: string | null;
  cutOfLength?: number;
}>();

const changedSummary = computed(() => {
  const summary = props.summary;
  if (summary) {
    const strippedHTML = stripHTML(summary);
    const cutLength = props.cutOfLength;
    return cutLength && strippedHTML.length >= cutLength ? strippedHTML.slice(0, cutLength) + "..." : strippedHTML;
  }

  return "";
});
</script>
