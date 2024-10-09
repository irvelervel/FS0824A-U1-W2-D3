// uno SWITCH è un costrutto che vi permette di inserire molti BLOCCHI di codice
// a seguito della valutazione di una variabile o di un'espressione

const cartTotal = 35

let discountPercentage // la lascio senza valore, undefined perchè ancora non lo so!

if (cartTotal < 10) {
  // da 0 a 9 rupie canadesi!
  discountPercentage = 0
} else if (cartTotal < 25) {
  // da 10 a 24 rupie canadesi!
  discountPercentage = 0.1
} else if (cartTotal < 50) {
  // da 25 a 49 rupie canadesi!
  discountPercentage = 0.15
} else if (cartTotal < 100) {
  // da 50 a 99 rupie canadesi!
  discountPercentage = 0.2
} else {
  // più di 100 rupie canadesi!
  discountPercentage = 0.3
}

const total = cartTotal * (1 - discountPercentage)
console.log('TOTALE', total)

//
const eyeColor = 'green'

// if (eyeColor === 'green') {
//   console.log('Hai degli occhi bellissimi')
// } else if (eyeColor === 'azure') {
//   console.log('hai degli occhi particolari')
// } else if (eyeColor === 'brown') {
//   console.log('hai degli occhi che non sono niente di particolare')
// } else {
//   console.log('hai degli occhi che non riesco a descrivere')
// }

// uno SWITCH è uno SUGAR COATING di tanti else if()

switch (eyeColor) {
  case 'green':
    console.log('Hai degli occhi bellissimi')
    break
  // il break fa USCIRE dallo switch

  case 'azure':
    console.log('hai degli occhi particolari')
    break

  case 'brown':
    console.log('hai degli occhi che non sono niente di particolare')
    break

  default:
    // finite qui dentro se NESSUNA delle casistiche precedenti
    // si è avverata
    console.log('hai degli occhi che non riesco a descrivere')
}
