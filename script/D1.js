/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//  1) String : rappresenta i dati testuali ad esempio "Hello" , `Hello world`ecc...
//              In JavaScript, le stringhe sono circondate da virgolette:
//              - Apice singolo: 'Hello' 
//              - Apice doppio: "Hello" 
//              - Backticks: `Hello` 

//  2) Number : il dato numerico in javascript rappresenta i numeri interi e decimali con la distinzione di quest'ultimi
//              attraverso l'inserimento del punto. 
//              ESEMPIO : let number1 = 3 
//                        let number2 = 3.5
//
//  3) Boolean: Un valore booleano è semplicemente un dato che può assumere solo due valori : True e False, quindi 
//              quando ci troviamo a dover confrontare due o più valori, otteniamo come risultato un valore booleano.
//              ESEMPIO : let num1 = 5
//                        let num2 = 10 
//                        console.log(num1 < num2) --True--
//                        console.log(num1 > num2) --False--

//  4) Undefined: è una proprietà che indica che una variabile non ha un valore assegnato oppure non è affatto definita. Per
//                esempio, usare una variabile non precedentemente definita all'interno di una funzione, genera un avviso di undefined.
//                ESEMPIO : let myVariable
//                          console.log('myVariable', myVariable) -- non è mai stato definito il valore di myVariable --             

//  5) Null:      è una Keywords che segnala l'assenza intenzionale di un oggetto. E' diverso da valore numerico 0 in quanto indica
//                una mancanza di identificazione, dovrà essere quindi lo sviluppatore a stabilire che una variabile non dovrà
//                avere un valore.
//                ESEMPIO : let anotherVariable = null
//                          console.log('anotherVariable', anotherVariable) -- null, l'assenza di valore --

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Francesco"
console.log(nome)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12
let number2 = 20
console.log('somma number1 e number2',number1 + number2)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x 
x = 12
console.log('valore x',x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 12
let number = 4
console.log('sottrazione tra variabile x e 4',x - number)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nome1 = "john"
let nome2 = "John"
console.log('La loro uguaglianza è falsa',nome1 === nome2)