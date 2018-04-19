export const getRandomInt = (min = 1, max = 50) =>
  Math.floor(Math.random() * (1 + (max - min) + min));

export const gcd = (x, y) => (x ? gcd(y % x, x) : y);

// returns a sorted array of digits from a number
export const numberToSortedArrayOfDigits = (num) => {
  const stringFromNum = num.toString();
  const sortedArrayFromString = stringFromNum.split('').sort();
  const digitsArrayFromArray = sortedArrayFromString.map(item => Number(item));
  return digitsArrayFromArray;
};

// returns a balanced number
// every next digit is greater by one or equal to the previous
export const balance = (num) => {
  const digitsArray = numberToSortedArrayOfDigits(num);
  const recBalance = (array) => {
    const newArray = array.reduce((acc, item, index) => {
      const nextItem = array[index + 1];
      if (nextItem && (nextItem - item >= 2)) {
        acc.arr[index] += 1;
        acc.arr[index + 1] -= 1;
        acc.isBalanced = false;
        return acc;
      }
      return acc;
    }, { arr: array, isBalanced: true });
    if (newArray.isBalanced) { return newArray.arr.join(''); }
    return recBalance(newArray.arr);
  };
  return recBalance(digitsArray);
};

