const chalk = require('chalk')
console.log(chalk.blue('Entrer une note à la fois. Tapper 00 comme note pour avoir votre moyenne'))

const readlineSync = require('readline-sync')
let tab = Number(readlineSync.question('your grade: '))
let sum = 0
let X = 0
let exit = 00
const average = (tab, exit) => {
  while (tab !== exit) {
    sum += tab
    X += 1
    console.log(`${sum}`)
    tab = Number(readlineSync.question('your grade: '))

  }
  return sum / X
}
console.log(chalk.green("your average is : "), chalk.yellow(average(tab, exit)))
