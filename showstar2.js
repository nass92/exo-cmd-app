const showStars = (nbStars, symbole, r) => {
  if (r === "-r") {
    for (; nbStars > 0; nbStars--) {
      console.log(symbole.repeat(nbStars))
    }
  } else {
    for (let i = 1; i <= nbStars; i += 1) {
      console.log(symbole.repeat(i))
    }
  }
}



if (process.argv.length !== 4 && process.argv.length !== 5) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}



const nbStars = Number(process.argv[2])
const symbole = process.argv[3]
const r = process.argv[4]

showStars(nbStars, symbole, r)