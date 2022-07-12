<template>
  <Teleport to="body">
    <div class="modal fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-30">
      <div
        class="ml-auto mt-3 mr-3 mb-8 block h-10 w-10 cursor-pointer rounded-full bg-white p-2"
        @click="handleCloseClick()"
      >
        <IconCross />
      </div>
      <div class="flex items-start justify-center text-center md:py-12">
        <div class="w-full overflow-hidden rounded-md bg-white text-left shadow-xl md:w-1/2 lg:w-1/3">
          <div class="border-b px-3 py-2">
            <div class="relative">
              <IconSearch class="absolute left-1 top-1/2 z-10 mt-[-16px] w-8 -scale-x-100" fill="#b7b9c3" />
              <input
                type="search"
                class="w-full rounded-md p-3 pl-12 text-2xl focus:outline-none"
                placeholder="Search..."
                v-model="searchQuery"
              />
            </div>
          </div>
          <div class="flex max-h-[515px] flex-col overflow-y-auto">
            <template v-for="(show, index) in data" :key="show.id">
              <movie-search-result-item @click="handleCloseClick()" :show="show" :index="index" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import IconSearch from "@/components/icons/IconSearch.vue";
import { onMounted, ref } from "vue";
import { useShowSearch } from "@/composables/useShowSearch";
import MovieSearchResultItem from "@/components/Search/MovieSearchResultItem.vue";
import IconCross from "@/components/icons/IconCross.vue";

onMounted(() => {
  document.body.style.overflowY = "hidden";
});

const emits = defineEmits<{
  (e: "closeClick"): void;
}>();

const handleCloseClick = () => {
  emits("closeClick");
  document.body.style.overflowY = "";
  document.body.style.overflowY = "auto";
};

const searchQuery = ref<string>("");

const { data } = useShowSearch(searchQuery);
</script>
