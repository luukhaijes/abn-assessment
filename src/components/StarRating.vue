<template>
  <div class="flex flex-row">
    <div v-for="star in STAR_AMOUNT" :key="star">
      <IconStar fill="rgb(210, 213, 218)" class="w-6" :ref="(el) => (divs[star] = el)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue";
import { onMounted, ref } from "vue";
import IconStar from "@/components/icons/IconStar.vue";
const STAR_AMOUNT = [0, 1, 2, 3, 4];

const props = defineProps<{
  score: number;
}>();

const stars = (): number[] => {
  const score = Math.floor(props.score);
  if (score > 1) {
    const scoreHalved = Math.floor(props.score / 2);
    return [...Array(scoreHalved).keys()];
  } else {
    return [0];
  }
};

const divs = ref<Array<ComponentPublicInstance<HTMLElement>>>([]);

onMounted(() => {
  stars().forEach((star: number) => {
    if (divs.value && divs.value[star]) {
      divs.value[star].$el.style.fill = "#f9d949";
    }
  });
});
</script>
