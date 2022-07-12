import { afterAll, describe, vi, expect, test } from "vitest";
import { useGet } from "../useGet";
import { flushPromises } from "@vue/test-utils";

const showItem = {
  name: "Game of thrones"
};

const errorItem = { message: "Error" };

const fetchMock = (url: string) => {
  return Promise.resolve({
    json: () => {
      if (url === "api-url") {
        return Promise.resolve(showItem);
      }
      return Promise.reject(errorItem);
    }
  });
};

vi.stubGlobal("fetch", vi.fn(fetchMock));

describe("UseGet", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("Should start with null", async () => {
    const { data } = useGet("api-url");
    expect(data.value).to.equal(null);
  }, 200);

  test("Should return an error if doesnt suffice", async () => {
    const { error } = useGet("wrong-url");
    await flushPromises();

    expect(error.value).to.not.equal(null);
    expect(error.value).to.deep.equal(errorItem);
  }, 200);

  test("Should return data ref with value", async () => {
    const { data } = useGet("api-url");
    await flushPromises();

    expect(data.value).to.deep.equal(showItem);
  }, 200);
});
