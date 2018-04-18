import play from '..';
import { getRandomInt, gcd } from '../utils';

const desc = 'Find the greatest common divisor of given numbers.\n';

const brainGcd = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  return {
    expectedAnswer: `${gcd(num1, num2)}`,
    questionString: `${num1} ${num2} `,
  };
};

export default () => play(brainGcd, desc);
