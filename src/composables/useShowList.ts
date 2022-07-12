import type { ShowItem } from "@/interfaces/show.interface";
import { useGet } from "@/composables/useGet";
import type { UseGet } from "@/composables/useGet";

type UseShowList = UseGet<ShowItem[]>;

export function useShowList(): UseShowList {
  const url = "https://api.tvmaze.com/shows";
  return useGet(url);
}
