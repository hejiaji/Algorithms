import { simpleSort } from "../../../sorts/index";

describe("simple sort", function() {
  const testInput = [5, 1, 3, 7, 10, 4];
  it("return sorted array when using asc order", function() {
    expect(simpleSort(testInput, true)).toEqual([1, 3, 4, 5, 7, 10]);
  });
  it("return sorted array when using desc order", () => {
    expect(simpleSort(testInput,false)).toEqual([10, 7, 5, 4, 3, 1]);
  })
});
