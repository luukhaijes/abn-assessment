<template>
  <div v-if="show" class="flex h-96 w-full overflow-hidden bg-cover bg-center" ref="billBoard">
    <div class="flex w-full min-w-[24rem] bg-black bg-opacity-10 p-3 pb-6 backdrop-blur md:w-auto md:p-12">
      <div class="mt-auto">
        <h2 class="mb-1 text-4xl font-bold text-white">{{ show.name }}</h2>
        <StarRating class="mb-2" :score="show.rating.average" />
        <div class="mb-1 flex flex-row text-[13px] text-white">{{ show.averageRuntime }}min - {{ readableGenre }}</div>
        <h3 class="text-base font-bold text-white">Starring</h3>
        <p class="max-w-xs text-white" :class="{ 'mb-2': $slots.default }">{{ readableStarring }}</p>
        <div :class="{ hidden: !$slots.default }">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { ShowImage } from "@/interfaces/show-images.interface";
import type { ShowDetails } from "@/composables/useGetShow";
import StarRating from "@/components/StarRating.vue";
import { getRandom } from "@/utils/get-random";

const props = defineProps<{
  show: ShowDetails;
}>();

const readableGenre = computed(() => props.show.genres.join(" "));
const readableStarring = computed(() =>
  props.show._embedded.cast
    .map((cast) => cast.person.name)
    .slice(0, 4)
    .join(", ")
);
const billBoard = ref<HTMLElement>();

watch(billBoard, () => {
  const show = props.show;
  if (billBoard.value) {
    const accumulator: { background: Array<ShowImage>; poster: Array<ShowImage> } = {
      background: [],
      poster: []
    };
    const { background, poster } = show._embedded.images.reduce((acc, image) => {
      if (image.type in acc) {
        acc[image.type].push(image);
      }
      return acc;
    }, accumulator);

    const images = background.length ? background : poster;
    const randomImage = getRandom<Array<ShowImage>>(images);

    billBoard.value.style.backgroundImage = `url("${randomImage.resolutions.original.url}")`;
  }
});
</script>
<style>
p {
}
</style>
