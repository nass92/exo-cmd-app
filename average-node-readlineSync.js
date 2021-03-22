const chalk = require('chalk')
console.log(chalk.blue('Entrer une note à la fois. Tapper -1 comme note pour avoir votre moyenne'))

const readlineSync = require('readline-sync')
let nb = Number(readlineSync.question('your grade: '))
let sum = 0
let X = 0
let exit = -1
const average = (nb, exit) => {
  while (nb !== exit) {
    sum += nb
    X += 1
    //console.log(`${sum}`)
    nb = Number(readlineSync.question('your grade: '))

  }
  return sum / X
}
console.log(chalk.green("your average is : "), chalk.yellow(average(nb, exit)))
