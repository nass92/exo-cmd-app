const chalk = require('chalk')

const readlineSync = require('readline-sync')
let graduation = 0

//QUESTION: 1

console.log('Question1: Le C++ est un: \n answer 1 : language \n answer 2 : compilateur')
let answer = Number(readlineSync.question('Answer: '))
while (answer < 1 || answer > 2 || isNaN(Number(answer))) {
  console.log('Error!! Please choise 1 or 2')
  answer = Number(readlineSync.question('Your Answer: '))
}


answer === 1 ? graduation += 1 : graduation += 0
console.log(`Your grade is ${graduation}/1`)

//question 2

console.log('Question2: TypeScript est une évolution de Javascript: \n answer 1 : True \n answer 2 : False')
let answer2 = Number(readlineSync.question('Answer: '))
while (answer2 < 1 || answer2 > 2 || isNaN(Number(answer2))) {
  console.log('Error!! Please choise 1 or 2')
  answer2 = Number(readlineSync.question('Your Answer: '))
}
answer2 === 1 ? graduation += 1 : graduation += 0
console.log(`Your grade is ${graduation}/2`)

//question 3

console.log('Question3: Lire les cours avant de faire les exercices est inutile: \n answer 1 : True \n answer 2 : False')
let answer3 = Number(readlineSync.question('Answer: '))
while (answer3 < 1 || answer3 > 2 || isNaN(Number(answer3))) {
  console.log('Error!! Please choise 1 or 2')
  answer3 = Number(readlineSync.question('Your Answer: '))
}
answer3 === 2 ? graduation += 1 : graduation += 0
console.log(`Your grade is ${graduation}/3`)

//Question 4
console.log('Question4: react.js a été developpé par Google: \n answer 1 : True \n answer 2 : False')
let answer4 = Number(readlineSync.question('Answer: '))
while (answer4 < 1 || answer4 > 2 || isNaN(Number(answer4))) {
  console.log('Error!! Please choise 1 or 2')
  answer4 = Number(readlineSync.question('Your Answer: '))
}
answer4 === 2 ? graduation += 1 : graduation += 0
console.log(`Your grade is ${graduation}/4`)

//Question 5
console.log('Question 5: Ethereum est une blockchain publique: \n answer 1 : True \n answer 2 : False')
let answer5 = Number(readlineSync.question('Your Answer: '))
while (answer5 < 1 || answer5 > 2 || isNaN(Number(answer5))) {
  console.log('Error!! Please choise 1 or 2')
  answer5 = Number(readlineSync.question('Your Answer: '))
}
answer5 === 1 ? graduation += 1 : graduation += 0
console.log("Congratulation!! Your grade is", chalk.red(`${graduation}/5!`))

