export function createAndShuffleArray(size: number): number[] {
  const array = Array.from({ length: size }, (_, index) => index + 1);

  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    // NoSonar
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
