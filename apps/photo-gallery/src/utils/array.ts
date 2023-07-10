import crypto from "crypto";

export function createAndShuffleArray(size: number): number[] {
  const array = Array.from({ length: size }, (_, index) => index + 1);

  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = crypto.randomInt(0, currentIndex + 1);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
