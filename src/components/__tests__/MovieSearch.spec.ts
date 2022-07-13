import { describe, test, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

import MovieSearch from "@/components/Search/MovieSearch.vue";
import { MovieSearchTeleport } from "../../tokens/movie-search-teleport";
import { nextTick } from "vue";
import { createTestAttr } from "../../test-utils/create-test-attr";
import { shows } from "../../test-utils/shows";
import { castType } from "../../test-utils/cast-type";
import type { ShowItem } from "../../interfaces/show.interface";

describe("MovieSearch", () => {
  test("renders container", async () => {
    const wrapper = shallowMount(MovieSearch, {
      global: {
        provide: {
          [MovieSearchTeleport]: () => null
        }
      }
    });

    expect(wrapper.find(createTestAttr("search-container")).exists()).toBe(true);
  });

  test("renders items if available", async () => {
    const wrapper = shallowMount(MovieSearch, {
      global: {
        provide: {
          [MovieSearchTeleport]: () => null
        }
      }
    });

    castType<{ data: Array<ShowItem> }>(wrapper.vm).data = shows;
    await nextTick();

    const elements = wrapper.findAll(createTestAttr("search-result-item"));

    expect(elements.length).toBe(shows.length);
  });
});
