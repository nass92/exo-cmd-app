
const showStars = (nbStars, symbole) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(symbole.repeat(i))
  }
}

if (process.argv.length !== 4) {
  console.log('usage: node stars.js number')
  process.exit(1)
}


if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

const nbStars = Number(process.argv[2])
const symbole = process.argv[3]
showStars(nbStars, symbole)