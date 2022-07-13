<template>
  <div class="relative" v-if="showDetail">
    <div class="absolute left-4 md:left-16 top-4 z-30">
      <div class="h-12 w-12 rounded-full bg-white p-2">
        <router-link to="/">
          <IconAngleLeft />
        </router-link>
      </div>
    </div>
    <Billboard class="" :show="showDetail" />
    <div v-if="showDetail" class="mt-12 flex flex-col px-3 md:flex-row md:px-16">
      <div class="mr-16 hidden w-1/6 self-start rounded-md lg:inline-block">
        <img class="w-full rounded-md" :alt="'Poster of ' + showDetail.name" :src="showDetail.image.medium" />
      </div>
      <div class="mr-16 w-full grow md:w-4/6">
        <ShowSection class="mb-6">
          Synopsis
          <template #content>
            <SummaryItem :summary="showDetail.summary" />
          </template>
        </ShowSection>

        <ShowSection>
          Starring
          <template #content>
            <ShowCast :cast="showDetail._embedded.cast" />
          </template>
        </ShowSection>
      </div>
      <div class="w-full md:w-2/6">
        <ShowSection>
          Photos
          <template #content>
            <ShowPhotos :images="showDetail._embedded.images" />
          </template>
        </ShowSection>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useGetShow } from "@/composables/useGetShow";
import SummaryItem from "@/components/SummaryItem.vue";
import Billboard from "@/components/MovieBillboard.vue";
import ShowCast from "@/components/ShowCast.vue";
import ShowPhotos from "@/components/ShowPhotos.vue";
import ShowSection from "@/components/ShowSection.vue";
import { watch } from "vue";
import { usePageTitle } from "@/composables/usePageTitle";
import IconAngleLeft from "@/components/icons/IconAngleLeft.vue";

const { params } = useRoute();

const { data: showDetail } = useGetShow(+params.showId);

watch(showDetail, (value) => {
  if (value) {
    usePageTitle(value.name);
  }
});
</script>
