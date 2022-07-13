<template>
  <div data-test="star-container" class="flex flex-row">
    <div v-for="star in STARS" :key="star">
      <IconStar data-test="star" :fill="DEFAUlT_FILL_COLOR" class="w-6" :ref="(el) => addStarEls(el)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue";
import { onMounted, ref } from "vue";
import IconStar from "@/components/icons/IconStar.vue";

const STARS = [0, 1, 2, 3, 4];
const DEFAUlT_FILL_COLOR = "#d2d5da";
const ACTIVE_FILL_COLOR = "#f9d949";

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

const addStarEls = (el: unknown) => {
  divs.value.push(el as ComponentPublicInstance<HTMLElement>);
};

onMounted(() => {
  stars().forEach((star: number) => {
    if (divs.value && divs.value[star]) {
      divs.value[star].$el.style.fill = ACTIVE_FILL_COLOR;
    }
  });
});
</script>
