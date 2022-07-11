<template>
  <div v-if="showDetail">
    <Billboard class="" :show="showDetail" />
    <div v-if="showDetail" class="mt-12 flex flex-col px-3 md:flex-row md:px-16">
      <div class="mr-16 hidden w-1/6 self-start rounded-md lg:inline-block">
        <img class="w-full rounded-md" :alt="'Poster of ' + showDetail.name" :src="showDetail.image.medium" />
      </div>
      <div class="mr-16 w-full grow md:w-4/6">
        <ShowSummary class="mb-6">
          Synopsis
          <template #content>
            <SummaryItem :summary="showDetail.summary" />
          </template>
        </ShowSummary>

        <ShowSummary>
          Starring
          <template #content>
            <ShowCast :cast="showDetail._embedded.cast" />
          </template>
        </ShowSummary>
      </div>
      <div class="w-full md:w-2/6">
        <ShowPhotos :images="showDetail._embedded.images" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useGetShow } from "@/composables/use-get-show";
import SummaryItem from "@/components/SummaryItem.vue";
import Billboard from "@/components/MovieBillboard.vue";
import ShowCast from "@/components/ShowCast.vue";
import ShowPhotos from "@/components/ShowPhotos.vue";
import ShowSummary from "@/components/ShowSummary.vue";

const { params } = useRoute();

const { data: showDetail } = useGetShow(+params.showId);
</script>
