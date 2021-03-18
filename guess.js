const chalk = require('chalk')

const readlineSync = require('readline-sync')
let nbU = Number(readlineSync.question('your number: '))

const guess = (nbS, nbU) => {

  while (nbS < nbU || nbS > nbU || isNaN(Number(nbU))) {

    if (nbS < nbU) {
      console.log(chalk.red('Too Big!'))
      nbU = Number(readlineSync.question('your number: '))
    }
    else if (nbS > nbU) {
      console.log(chalk.red('Too Smal!'))
      nbU = Number(readlineSync.question('your number: '))
    } else {
      console.log(chalk.red('Error! Please choose a Number'))
      nbU = Number(readlineSync.question('your number: '))
    }
  }
  console.log(chalk.green('You Win!'))
}

guess(10, nbU)