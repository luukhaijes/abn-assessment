<template>
  <MovieBillboard v-if="data" class="mb-6" enlarge :show="data">
    <router-link :to="'/show/' + data.id">
      <ActionButton>View more</ActionButton>
    </router-link>
  </MovieBillboard>
</template>
<script setup lang="ts">
import MovieBillboard from "./MovieBillboard.vue";
import { useGetShow } from "@/composables/useGetShow";
import ActionButton from "@/components/ActionButton.vue";

const props = defineProps<{
  movieId: number;
}>();

const { data } = useGetShow(props.movieId);
</script>
