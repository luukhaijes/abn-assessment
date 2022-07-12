import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MovieSearchInput from "@/components/Search/MovieSearchInput.vue";
import { createTestAttr } from "../../test-utils/create-test-attr";

describe("MovieSearchInput", () => {
  const inputTestKey = createTestAttr("search-input");

  test("renders input element", () => {
    const wrapper = mount(MovieSearchInput);

    expect(wrapper.find(inputTestKey).exists()).toBe(true);
  });

  test("emits an event when typed", () => {
    const wrapper = mount(MovieSearchInput);

    wrapper.find(inputTestKey).setValue("click");

    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });

  test("be focused", () => {
    const wrapper = mount(MovieSearchInput, {
      attachTo: document.body
    });
    const element = wrapper.find(inputTestKey).element;

    expect(document.activeElement).toBe(element);

    // clean up
    wrapper.unmount();
  });
});
