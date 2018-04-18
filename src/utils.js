export const getRandomInt = (min = 1, max = 50) =>
  Math.floor(Math.random() * (1 + (max - min) + min));

export const gcd = (x = 0, y = 0) => (y === 0 ? x : gcd(y, x % y));

