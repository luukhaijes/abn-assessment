import type { UseGet } from "@/composables/use-get";
import type { ShowItem } from "@/interfaces/show.interface";
import { useGet } from "@/composables/use-get";
import type { Embeds } from "@/interfaces/embeds.interface";

export interface ShowDetails extends ShowItem {
  _embedded: Pick<Embeds, "images" | "cast">;
}

type UseGetShow = UseGet<ShowDetails>;

export function useGetShow(id: number): UseGetShow {
  const url = `https://api.tvmaze.com/shows/${id}?embed[]=images&embed[]=cast`;
  return useGet<ShowDetails>(url);
}
