import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  test("renders with slot content", () => {
    const wrapper = mount(ActionButton, { slots: { default: "View more" } });
    expect(wrapper.text()).toContain("View more");
  });
});
