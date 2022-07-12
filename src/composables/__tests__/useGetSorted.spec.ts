import { describe, expect, test } from "vitest";
import { useShowListSorted } from "../useShowListSorted";
import type { ShowItem } from "../../interfaces/show.interface";

const genres = ["Popular", "Fantasy", "Drama"];

const payload = [
  {
    name: "Adventure Time",
    genres: [genres[1]],
    rating: {
      average: 10
    }
  },
  {
    name: "Vampire diaries",
    genres: [genres[2]],
    rating: {
      average: 2
    }
  },
  {
    name: "Mandalorian",
    genres: [genres[1]],
    rating: {
      average: 6
    }
  }
] as Array<ShowItem>;

const expected = {
  sorted: {
    Popular: [payload[0], payload[2], payload[1]],
    [genres[1]]: [payload[0], payload[2]],
    [genres[2]]: [payload[1]]
  },
  genres: genres
};

describe("useGetSorted", () => {
  const { sorted } = useShowListSorted(payload);

  test("Should return popular sorted list based on rating", () => {
    expect(sorted.Popular).toBeDefined();
    expect(sorted.Popular).to.deep.equal(expected.sorted.Popular);
  });

  test("Should return all genres with popular", () => {
    expect(Object.keys(sorted).length).to.equal(genres.length);
  });
});
