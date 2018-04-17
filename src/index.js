import readlineSync from 'readline-sync';

export default (game, description) => {
  // greet the player, describe the game
  console.log('\nWelcome to the Brain Games!');
  if (description) { console.log(description); }

  // ask for a name
  const playerName = readlineSync.question('\nMay I know your name? ');
  console.log(`Hello, ${playerName}!`);
  const answersToWin = 3;

  const playRound = (round) => {
    if (round - 1 === answersToWin) {
      // victory
      console.log(`Congratulations, ${playerName}!\n`);
    } else {
      // play round
      const { expectedAnswer, questionString } = game();
      const question = `\nQuestion: ${questionString}\nYour answer: `;
      const answer = readlineSync.question(question);

      if (answer === expectedAnswer) {
        // call next round
        console.log('Correct!');
        playRound(round + 1);
      } else {
        // defeat
        console.log(`Sorry, "${answer}" is the wrong answer. :(`);
        console.log(`The correct answer is "${expectedAnswer}".`);
        console.log(`\nLet's try again, ${playerName}!\n`);
      }
    }
  };

  if (game) { playRound(1); }
};
