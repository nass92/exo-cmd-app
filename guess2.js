const chalk = require('chalk')

console.log(chalk.blue("Find the secret Number between 0 and 20. You have Five Chance!"))

const readlineSync = require('readline-sync')
let nbU = Number(readlineSync.question('your number: '))
let life = 5

const guess = (nbS, nbU) => {

  while (nbS < nbU || nbS > nbU || isNaN(Number(nbU))) {

    if (nbS < nbU) {
      console.log(chalk.red('Too Big!'))
      life -= 1
      console.log(`life : ${life}/5`)
      nbU = Number(readlineSync.question('your number: '))

    }
    else if (nbS > nbU) {
      console.log(chalk.red('Too Smal!'))
      life -= 1
      console.log(`life : ${life}/5`)
      nbU = Number(readlineSync.question('your number: '))

    }
    else {
      console.log(chalk.red('Error! Please choose a Number'))
      nbU = Number(readlineSync.question('your number: '))
    }
    if (life === 0) {
      console.log('Sorry, you lost!')
      process.exit(1)
    }
  }

  console.log(chalk.green('You Win! Congratulation!'))
}
guess(10, nbU)