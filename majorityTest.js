const readlineSync = require('readline-sync')


let name = readlineSync.question('Your name: ')
let surname = readlineSync.question('Your surname: ')
let age = Number(readlineSync.question('age: '))

if (age >= 18) {
  console.log(`${name} ${surname}, vous êtes majeur, vous pouvez voter.`)
} else {
  console.log(`${name} ${surname}, vous êtes mineur, vous ne pouvez pas voter.`)
}
