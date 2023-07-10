import { createAndShuffleArray } from "@/utils/array";

describe("createAndShuffleArray function", () => {
  it("returns an array of the correct size", () => {
    const size = 10;
    const array = createAndShuffleArray(size);
    expect(array).toHaveLength(size);
  });

  it("returns an array containing numbers from 1 to size", () => {
    const size = 10;
    const array = createAndShuffleArray(size);
    const sortedArray = array.slice().sort((a, b) => a - b);
    const normalArray = Array.from({ length: size }, (_, index) => index + 1);
    expect(
      sortedArray.every((item) => normalArray.includes(item))
    ).toBeTruthy();
  });

  it("returns a different order on subsequent calls (most of the time)", () => {
    const size = 10;
    const array1 = createAndShuffleArray(size);
    const array2 = createAndShuffleArray(size);
    expect(array1).not.toEqual(array2);
  });
});
