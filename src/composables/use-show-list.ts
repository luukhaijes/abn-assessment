import type { ShowItem } from "@/interfaces/show.interface";
import { useGet } from "@/composables/use-get";
import type { UseGet } from "@/composables/use-get";

type UseShowList = UseGet<ShowItem[]>;

export function useShowList(): UseShowList {
  const url = "https://api.tvmaze.com/shows";
  return useGet(url);
}
