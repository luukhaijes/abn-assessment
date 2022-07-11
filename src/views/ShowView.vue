<template>
  <Billboard class="" :show="showDetail" />
  <div v-if="showDetail" class="mt-12 flex flex-col px-3 md:flex-row md:px-16">
    <div class="mr-16 hidden w-1/6 self-start rounded-md lg:inline-block">
      <img class="w-full rounded-md" :alt="'Poster of ' + showDetail.name" :src="showDetail.image.medium" />
    </div>
    <div class="mr-16 w-full grow md:w-4/6">
      <div class="mb-4">
        <SectionTitle class="mb-6 w-auto"> Synopsis </SectionTitle>
        <MovieSummary :summary="showDetail.summary" />
      </div>
      <ShowCast :cast="showDetail._embedded.cast" />
    </div>
    <div class="w-full md:w-2/6">
      <ShowPhotos :images="showDetail._embedded.images" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useGetShow } from "@/composables/use-get-show";
import { useRoute } from "vue-router";
import SectionTitle from "@/components/SectionTitle.vue";
import MovieSummary from "@/components/MovieSummary.vue";
import Billboard from "@/components/MovieBillboard.vue";
import ShowCast from "@/components/ShowCast.vue";
import ShowPhotos from "@/components/ShowPhotos.vue";

const { params } = useRoute();

const { data: showDetail } = useGetShow(+params.showId);
</script>
