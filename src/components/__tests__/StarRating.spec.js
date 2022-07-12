import { test, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";

import StarRating from "@/components/StarRating.vue";
import { createTestAttr } from "../../test-utils/create-test-attr";

describe("StarRating", () => {
  test("Should contain 5 star elements", () => {
    const wrapper = mount(StarRating, {
      props: {
        score: 0
      }
    });
    const STAR_COUNT = wrapper.vm.STARS.length;

    const elements = wrapper.findAll(createTestAttr("star"));
    expect(elements.length).toBe(STAR_COUNT);
  });

  test("Should contain 5 star elements", () => {
    const wrapper = mount(StarRating, {
      props: {
        score: 6
      }
    });

    const elements = wrapper.findAll(createTestAttr("star"));
    const activeColor = wrapper.vm.ACTIVE_FILL_COLOR;
    expect(elements.filter((elm) => elm.element.style.fill === activeColor).length).toBe(3);
  });
});
