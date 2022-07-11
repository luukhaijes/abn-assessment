import type { UseGet } from "@/composables/use-get";
import type { ShowItem } from "@/interfaces/show.interface";
import type { ShowDetails } from "@/composables/use-get-show";
import { useShowList } from "@/composables/use-show-list";

type useGetHomeView = {
  list: UseGet<ShowItem>;
  single: UseGet<ShowDetails>;
};

export function useGetHomeView(): useGetHomeView {
  const { data: showListData, ...rest } = useShowList();

}