<template>
  <MovieBillboard v-if="data" class="mb-6" :show="data">
    <router-link :to="'/show/' + data.id">
      <button
        class="rounded bg-button-red px-6 py-1.5 text-sm font-bold text-white shadow transition duration-200 hover:bg-button-red-dark ">
        View more
      </button>
    </router-link>
  </MovieBillboard>
</template>
<script setup lang="ts">
import MovieBillboard from "./MovieBillboard.vue";
import { useGetShow } from "@/composables/use-get-show";

const props = defineProps<{
  movieId: number;
}>();

const { data } = useGetShow(props.movieId);
</script>
