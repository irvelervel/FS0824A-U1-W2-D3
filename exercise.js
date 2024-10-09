// esempio real-life :)

let animalsArray = [
  {
    name: 'Fufy',
    species: 'Cat',
    age: 5,
    furColor: 'white',
    numberOfLegs: 4,
    skills: ['meows', 'asking-for-food', 'purrs', 'sleeps'],
  },
  {
    name: 'Pluto',
    species: 'Dog',
    age: 1,
    furColor: 'gold',
    numberOfLegs: 4,
    skills: ['barks', 'plays', 'tail-wiggling', 'growls'],
  },
  {
    name: 'Poppy',
    species: 'Parrot',
    age: 2,
    furColor: 'green',
    numberOfLegs: 2,
    skills: ['sound-mimicking', 'sleeps', 'eating', 'flies', 'speaks'],
  },
]

// stampiamo in console tutte le specie di tutti gli animali
// vorrei avere qualcosa come
// Cat
// Dog
// Parrot

for (let i = 0; i < animalsArray.length; i++) {
  // valori validi di i: 0, 1 e 2
  console.log(animalsArray[i].species)
}

// voglio sapere quante skills ha ogni animale
for (let i = 0; i < animalsArray.length; i++) {
  // valori validi di i: 0, 1 e 2
  console.log(animalsArray[i].skills.length) // risultato: 4, 4 e 5
}

// andiamo a inserire solamente i NOMI PROPRIO degli animali in un nuovo array

const justTheNames = []

for (let i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].name)
  justTheNames.push(animalsArray[i].name)
}

console.log(justTheNames)

// pushiamo in un nuovo array solamente l'ULTIMA SKILL di ogni animale
const justTheLastSkills = []

for (let i = 0; i < animalsArray.length; i++) {
  // per prendere l'ULTIMO elemento di un array, ricordiamoci che possiamo utilizzare
  // la length... length-1 è sempre l'ULTIMO INDICE VALIDO di quell'array
  justTheLastSkills.push(
    animalsArray[i].skills[animalsArray[i].skills.length - 1]
  )
}

console.log('justTheLastSkills', justTheLastSkills)
