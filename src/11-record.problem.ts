import { expect, it } from "vitest";

// I used interface/type as a solution here, 
// but the Record type or an inline type can
// work also (see solution files for more info)
type CacheDictionary = {
  [id: string]: string
}
// interface CacheDictionary {...}

const createCache = () => {
  const cache: CacheDictionary = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
