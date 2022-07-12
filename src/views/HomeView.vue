<template>
  <main v-if="data && billboardShow">
    <HomeViewMovieBillboard :movie-id="billboardShow.id" />
    <show-list :show-list="data"></show-list>
  </main>
</template>

<script setup lang="ts">
import { useShowList } from "@/composables/useShowList";
import ShowList from "@/components/ShowList.vue";
import { ref, watch } from "vue";
import { getRandom } from "@/utils/get-random";
import HomeViewMovieBillboard from "@/components/HomeViewMovieBillboard.vue";
import type { ShowItem } from "@/interfaces/show.interface";

const { data } = useShowList();
const billboardShow = ref<ShowItem | null>(null);

watch(data, (value) => {
  if (value?.length) {
    billboardShow.value = getRandom(value);
  }
});
</script>
