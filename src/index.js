import readlineSync from 'readline-sync';
import { randomInt } from './random.js';

const rounds = 3;

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const isPrime = (number) => {
  if (number < 2) return false;
  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const games = {
  even: {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: () => { const value = randomInt(1, 100); return [String(value), value % 2 === 0 ? 'yes' : 'no']; },
  },
  calc: {
    description: 'What is the result of the expression?',
    question: () => {
      const a = randomInt(1, 50); const b = randomInt(1, 50); const ops = ['+', '-', '*']; const op = ops[randomInt(0, 2)];
      const answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
      return [`${a} ${op} ${b}`, String(answer)];
    },
  },
  gcd: {
    description: 'Find the greatest common divisor of given numbers.',
    question: () => { const a = randomInt(1, 50); const b = randomInt(1, 50); return [`${a} ${b}`, String(gcd(a, b))]; },
  },
  progression: {
    description: 'What number is missing in the progression?',
    question: () => {
      const start = randomInt(1, 20); const step = randomInt(1, 10); const hidden = randomInt(0, 9);
      const values = Array.from({ length: 10 }, (_, index) => start + index * step); const answer = values[hidden]; values[hidden] = '..';
      return [values.join(' '), String(answer)];
    },
  },
  prime: {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: () => { const value = randomInt(2, 100); return [String(value), isPrime(value) ? 'yes' : 'no']; },
  },
};

export const play = (gameName) => {
  const game = games[gameName];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.description);
  for (let round = 0; round < rounds; round += 1) {
    const [question, expected] = game.question();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== expected) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expected}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export const main = (gameName = 'even') => play(gameName);
