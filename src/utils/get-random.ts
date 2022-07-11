export function getRandom<T extends Array<unknown>>(array: T): T[0] {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
