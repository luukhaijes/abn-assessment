import type { Ref } from "vue";
import { ref, watch } from "vue";
import type { ShowItem } from "@/interfaces/show.interface";
import type { ShowListError, UseGet } from "@/composables/useGet";
import { useGet } from "@/composables/useGet";
import type { ShowSearchItem } from "@/interfaces/show-search-item.interface";

type UseShowList = UseGet<Array<ShowItem>>;

export function useShowSearch(query: Ref<string>): UseShowList {
  const url = "https://api.tvmaze.com/search/shows";
  const results = ref<ShowItem[]>([]);
  const searchError = ref<ShowListError | null>(null);

  if (query) {
    const { data, error, reload } = useGet<ShowSearchItem[]>();
    watch(query, () => {
      if (reload && query) {
        reload(url + "?q=" + query.value);
      } else {
        results.value = [];
      }
    });

    watch([data, error], () => {
      if (data.value) {
        results.value = data.value?.map((searchItem: ShowSearchItem) => searchItem.show);
      }
      if (error.value) {
        searchError.value = error.value;
      }
    });
  }

  return {
    data: results,
    error: searchError
  };
}
