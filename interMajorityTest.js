const readlineSync = require('readline-sync')

if (process.argv.length != 3) {
  console.log(`ERROR`)
  process.exit(1)
}

let name = readlineSync.question('Your name: ')
let surname = readlineSync.question('Your surname: ')
let age = Number(readlineSync.question('age: '))





if (process.argv[2] == 18) {
  if (age >= 18) {
    console.log(`${name} ${surname}, vous êtes majeur, vous pouvez voter.`)
  } else {
    console.log(`${name} ${surname}, vous êtes mineur, vous ne pouvez pas voter.`)
  }
}

if (process.argv[2] == 21) {
  if (age >= 21) {
    console.log(`${name} ${surname}, vous êtes majeur, vous pouvez voter.`)
  } else {
    console.log(`${name} ${surname}, vous êtes mineur, vous ne pouvez pas voter.`)
  }
}
