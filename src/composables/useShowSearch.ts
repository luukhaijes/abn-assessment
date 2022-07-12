import type { ShowItem } from "@/interfaces/show.interface";
import { useGet } from "@/composables/useGet";
import type { UseGet } from "@/composables/useGet";
import { ref, watch } from "vue";
import type { Ref } from "vue";
import type { ShowSearchItem } from "@/interfaces/show-search-item.interface";

type UseShowList = UseGet<ShowItem[]>;

export function useShowSearch(query: Ref<string>): UseShowList {
  const url = "https://api.tvmaze.com/search/shows";
  const results = ref<ShowItem[]>([]);

  if (query) {
    const { data, reload } = useGet<ShowSearchItem[]>();
    watch(query, () => {
      if (reload && query) {
        reload(url + "?q=" + query.value);
      } else {
        results.value = [];
      }
    });

    watch(data, () => {
      if (data.value) {
        results.value = data.value?.map((searchItem: ShowSearchItem) => searchItem.show);
      }
    });
  }

  return {
    data: results
  };
}
