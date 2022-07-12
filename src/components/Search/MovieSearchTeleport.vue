<template>
  <Teleport to="body">
    <div
      data-test="teleport-container"
      tabindex="0"
      class="modal fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-30"
      @keyup.capture.esc="handleCloseClick()"
    >
      <div
        data-test="teleport-close"
        class="ml-auto mt-3 mr-3 mb-8 block h-10 w-10 cursor-pointer rounded-full bg-white p-2"
        @click="handleCloseClick()"
      >
        <IconCross />
      </div>
      <MovieSearch />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import MovieSearch from "./MovieSearch.vue";
import IconCross from "@/components/icons/IconCross.vue";
import { onMounted, provide } from "vue";
import { MovieSearchTeleport } from "@/tokens/movie-search-teleport";

const emits = defineEmits<{
  (e: "closeClick"): void;
}>();

onMounted(() => {
  document.body.style.overflowY = "hidden";
});

const handleCloseClick = () => {
  emits("closeClick");
  document.body.style.overflowY = "";
  document.body.style.overflowY = "auto";
};

provide(MovieSearchTeleport, handleCloseClick);
</script>
