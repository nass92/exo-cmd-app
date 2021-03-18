const chalk = require('chalk')

const readlineSync = require('readline-sync')
let nbU = readlineSync.question('your number: ')

const guess = (nbS, nbU) => {
  if (nbS < nbU) {
    console.log(chalk.red('Too Big!'))
  }
  else if (nbS > nbU) {
    console.log(chalk.red('Too Smal!'))
  } else {
    console.log(chalk.green('You Win!'))
  }
}
guess(10, nbU)