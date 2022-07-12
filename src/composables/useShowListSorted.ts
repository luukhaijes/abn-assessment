import type { ShowItem } from "@/interfaces/show.interface";
import type { Dictionary } from "@/interfaces/dictionary.interface";
import { randomize } from "@/utils/randomize-array";
import { unref } from "vue";
import { GenreEnum } from "@/enum/genre.enum";

type ChunkedShows = Dictionary<Array<ShowItem>>;

function getShowsByGenre(genre: string, shows: Array<ShowItem>): Array<ShowItem> {
  return shows.filter((show: ShowItem) => show.genres.includes(genre));
}

function getPopularShows(shows: Array<ShowItem>, limit = 20): Array<ShowItem> {
  return shows.sort((a, b) => b.rating.average - a.rating.average).slice(0, limit);
}

export function useShowListSorted(showsRef: Array<ShowItem>): {
  sorted: ChunkedShows;
  genres: Array<string>;
} {
  const shows = unref(showsRef);
  if (!shows) {
    return {
      genres: [],
      sorted: {}
    };
  }

  const _genresWithDuplicates = shows.map((show: ShowItem) => show.genres).flat();

  let genres = [...new Set(_genresWithDuplicates)];
  const sorted: ChunkedShows = {};
  sorted[GenreEnum.popular] = getPopularShows(shows);
  genres.forEach((genre: string) => {
    sorted[genre] = randomize<ShowItem>(getShowsByGenre(genre, shows));
  });

  genres = [GenreEnum.popular, ...genres];

  return {
    genres,
    sorted
  };
}
