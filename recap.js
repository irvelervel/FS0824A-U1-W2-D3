// un ARRAY è una COLLEZIONE di valori, ordinata.
// può contenere qualsiasi cosa: stringhe, numeri, booleani, array
const array = ['stefano', 'giulia', 'antonio']
// ogni elemento in un array è determinato univocamente grazie alla sua POSIZIONE
// ogni array è dotato di una LUNGHEZZA (length), un numero che ci riassume
// la quantità di elementi in esso contenuta
// l'elemento 'stefano' è in prima posizione, 'giulia' in seconda etc etc.
// gli array cominciano a contare SEMPRE da 0 in JS!
// l'indice di 'stefano' è 0
// l'indice di 'giulia' è 1
// l'indice di 'antonio' è 2

// tecniche per LAVORARE CON GLI ARRAY
// push -> inserisce un nuovo elemento in CODA
// unshift -> inserisce un nuovo elementi in CIMA
// pop -> elimina sempre l'ULTIMO elemento
// shift -> elimina sempre il PRIMO elemento
// splice -> richiede la posizione di partenza, poi chiede quanti elementi eliminare

array[0] // 'stefano'
array[1] // 'giulia'
array[2] // 'antonio'

console.log(
  'Io mi chiamo ' +
    array[0].toUpperCase() +
    ' e questo è il mio amico ' +
    array[2].toUpperCase()
)

array[2] = 'daniel'

// l'array è diventato ['stefano', 'giulia', 'daniel']

//
// OGGETTI

const sofa = {
  // coppie chiave:valore
  color: 'blue',
  weight: 50,
  material: 'fabric',
}

// console.log(color) // undefined
console.log(sofa.color) // 'blue'
console.log(sofa.weight) // 50

// modo alternativo di esplorare un oggetto: "square brackets notation"
console.log(sofa['color']) // 'blue'

const test = 'material'

console.log(sofa[test]) // 'fabric'

sofa.soft = true // abbiamo AGGIUNTO una proprietà!

sofa.color = 'red' // abbiamo SOVRASCRITTO il valore di "color", perchè
// non è possibile aggiungere in un oggetto 2 volte la stessa proprietà
console.log('SOFA ALLA FINE', sofa)

// IF, IF/ELSE
// logica condizionale

let number
number = 0 // ASSEGNAZIONE

if (
  number === 0 // torna TRUE o FALSE
  // CONTROLLO
) {
  // esegue un blocco di codice inserito tra {  }
  console.log('SI VEDE!')
}

let value = 60
// value - (value / 100 * 22)
// value * 0.78

if (value > 50) {
  // valore maggiore di 50, spedizione gratuita
} else {
  // value <= 50
  // valore è minore o uguale a 50
}

if (value > 10 && value <= 20) {
  // value vale 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
} else if (value > 20) {
  // 21, 22, 23, 24, 25, etc.
} else {
  // value che vale 10 o meno
}

// VALORI TRUTHY e FALSY

if ('EPICODE') {
  console.log('evviva!')
}

// valutati come "condizioni":
// - tutto ciò che ha un valore, è true (anche stringhe con spazi, numeri negativi etc.)
// - stringhe vuote sono false
// - 0 e -0 sono false
// - undefined, null e NaN sono falsy
