// un CICLO rappresenta una struttura in grado di ripetere una serie di istruzioni
// un numero PRE-DETERMINATO o NON PRE-DETERMINATO di volte.
// il ciclo WHILE (mentre, durante) rappresenta una struttura che ri-esegue una serie
// di istruzioni un numero NON PRE-DETERMINATO di volta.

let counter = 0

while (counter < 3) {
  // siamo dentro al ciclo! questa serie di istruzioni verrà eseguita fino a che
  // la condizione NON risulta più TRUE
  console.log('DENTRO AL CICLO WHILE, ECCO COUNTER', counter)
  // stiamo raggiungendo la graffa di conclusione: ora il ciclo RIPARTE,
  // ovvero verifica nuovamente la condizione e se è ancora TRUE si ripete
  counter = counter + Math.random()
  // sto estraendo un numero casuale tra 0 e 1, e lo sto sommando a counter:
  // in questo modo prima o poi raggiungerò un valore almeno pari a 5
}

console.log('USCITI DAL CICLO!')
