// un ciclo FOR è una struttura che permette di ripetere una serie di istruzioni
// un numero PRE-DETERMINATO di volte!

// SINTASSI DEL CICLO FOR
// for(inizializzazione del contatore; condizione da controllare per la ripetizione
// del ciclo; quantità di incremento del contatore){
//  il codice va qui dentro
// }

// i++ è la stessa cosa che dire i = i+1 (incrementano i di 1)
for (let i = 0; i < 10; i++) {
  // il ciclo for funziona così:
  // si parte in i che vale 0 alla prima iterazione
  // si esegue tutto il contenuto di queste graffe
  console.log('DENTRO IL FOR', i)
  // raggiunta la graffe finale, i viene incrementata di 1
  // il for riparte: verifica che la condizione sia rispettata (1 è sempre minore di 10)
  // viene rieseguito il corpo del for
}

// qua il for è finito!
console.log('USCITO DAL FOR!')

// Un ciclo FOR ha una serie di iterazioni pre-calcolate all'inizio: grazie all'indice
// i noi sappiamo a che "giro" siamo del for:
// alla PRIMA iterazione, i vale 0
// alla SECONDA iterazione, i vale 1
// alla TERZA iterazione, i vale 2
// alla QUARTA iterazione, i vale 3
// ...
// alla DECIMA iterazione, i vale 9
// un'undicesima iterazione non esiste, poichè a questo punto la i è diventata 10
// e la condizione del for non è più rispettata (10 non è minore di 10)

// questo valore di "i" parte da 0 e incrementa di 1 fino a raggiungere un limite prefissato
// se noi come limite dessimo la lunghezza di un array, questa "i" avrebbe SEMPRE
// un valore che è un valido INDICE di quell'array

const arrayOfNames = [
  'daniel', // 0
  'giulia', // 1
  'giovanni', // 2
  'lorenzo', // 3
  'loreta', // 4
  'michele', // 5
  'tommaso', // 6
  'umberto', // 7
]

// la lunghezza di un array è pari al numero dei suoi elementi, quindi in questo caso 8
console.log("LUNGHEZZA DELL'ARRAY", arrayOfNames.length) // 8

for (let i = 0; i < arrayOfNames.length; i++) {
  // la condizione è che i sia sempre minore di 8 (la lunghezza dell'array)
  //   console.log('I VALE', i)
  console.log(arrayOfNames[i]) // un nome alla volta
}

// altro esempio
let arrayOfNumbers = [45, 7, -5, 0, 98, 1] // 6 elementi

for (let i = 0; i < arrayOfNumbers.length; i++) {
  // la i vale tutti i valori da 0 a 5
  // 0 alla prima iterazione
  // 1 alla seconda iterazione
  // 2 alla terza iterazione
  // 3 alla quarta iterazione
  // 4 alla quinta iterazione
  // 5 alla sesta iterazione
  console.log("prendo l'elemento i-esimo dell'array", arrayOfNumbers[i])
  console.log('LA I VALE', i)
  //   arrayOfNumbers.push(i)
}

// pusha i numeri da 1 a 10 in un array

const array = []

for (let i = 0; i < 10; i++) {
  array.push(i + 1) // pusho ogni volta il valore che ha i in quel momento incrementato di 1
}

console.log(array)
