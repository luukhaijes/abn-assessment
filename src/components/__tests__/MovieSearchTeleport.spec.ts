import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";

import MovieSearchTeleport from "@/components/Search/MovieSearchTeleport.vue";
import { createTestAttr } from "@/test-utils/create-test-attr";

describe("MovieSearchTeleport", () => {
  test("emits close event on close button click", async () => {
    const wrapper = mount(MovieSearchTeleport, {
      global: {
        stubs: {
          teleport: true
        }
      }
    });

    await wrapper.find(createTestAttr("teleport-close")).trigger("click");
    expect(wrapper.emitted()).toHaveProperty("closeClick");
  });

  test("emits close event on esc key", async () => {
    const wrapper = mount(MovieSearchTeleport, {
      global: {
        stubs: {
          teleport: true
        }
      }
    });

    await wrapper.find(createTestAttr("teleport-container")).trigger("keyup.capture.esc");
    expect(wrapper.emitted()).toHaveProperty("closeClick");
  });

  test("container must have a tabindex", async () => {
    const wrapper = mount(MovieSearchTeleport, {
      global: {
        stubs: {
          teleport: true
        }
      }
    });

    const attributeValue = wrapper.get(createTestAttr("teleport-container")).element.getAttribute("tabindex");
    expect(attributeValue).not.null;
  });
});
