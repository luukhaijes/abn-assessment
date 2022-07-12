import { describe, test, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";

import MovieSearch from "@/components/Search/MovieSearch.vue";
import { createTestAttr } from "../../test-utils/create-test-attr";
import { MovieSearchTeleport } from "../../tokens/movie-search-teleport";
import { useShowSearch } from "../../composables/useShowSearch";
import { nextTick } from "vue";
import { shows } from "../../test-data/shows";

describe("MovieSearch", () => {
  test("renders container", async () => {
    const wrapper = shallowMount(MovieSearch, {
      global: {
        provide: {
          [MovieSearchTeleport]: () => {}
        }
      }
    });

    expect(wrapper.find(createTestAttr("search-container")).exists()).toBe(true);
  });

  test("renders items if available", async () => {
    const wrapper = shallowMount(MovieSearch, {
      global: {
        provide: {
          [MovieSearchTeleport]: () => {}
        }
      }
    });

    wrapper.vm.data = shows;
    await nextTick();

    const elements = wrapper.findAll(createTestAttr("search-result-item"));

    expect(elements.length).toBe(shows.length);
  });
});
