export function createAndShuffleArray(size: number): number[] {
  const array = Array.from({ length: size }, (_, index) => index + 1);

  for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = getRandomIntInclusive(1, currentIndex);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getRandomIntInclusive(min: number, max: number): number {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  let randomNumber = randomBuffer[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}
