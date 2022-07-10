/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

*/

/* SCRIVI QUI LA TUA RISPOSTA 
let c = 10;
let d = 15;
if (c > d) {
  console.log(" c è maggiore di d")
} else {
  if(d>c){
  console.log("d è maggiore di c")
  }
}
*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let x = 10;

if ( i=5, i!= x ) {
  console.log("not equal")
} else {
  ("equal")
}*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile
   per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* SCRIVI QUI LA TUA RISPOSTA 


const modulo = 34 % 5;

if (modulo == 0 ){
  console.log("divisibile by 5" );
}else {
  console.log(" not divisibile by 5" );
}
*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 
  oppure se la loro addizione/sottrazione sia uguale a 8.*/

/* SCRIVI QUI LA TUA RISPOSTA 

let a = 8;
let b = 16%2;

if (a==8 || b==8 || a+b==8 || a-b==8 ) {
  console.log("il valore di uno di essi sia 8 oppure se la loro addizione sottrazione sia uguale a 8 ")
} else {
  console.log("i numeri inseriti non sono uguali a 8")

}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let totalShoppingCart= 50; 
let spedizione ;


if(totalShoppingCart >= 50) {
    spedizione = 0;
} else {
    spedizione = 10;
}
let totale = totalShoppingCart + spedizione;
console.log("la spesa di spedizione è pari a : " + spedizione );
console.log("la somma da pagare è pari a  : " + totale );
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart2 = 390; 
let percentage = ((totalShoppingCart2/100)*20);
let finalPrice = 0;

if(totalShoppingCart2 >= 100) {
  finalPrice= totalShoppingCart2 - percentage;
} else {
  finalPrice=totalShoppingCart;
  console.log("fai un acquisto pari o superiore a 100 e e avrai un 20% di sconto")
}
console.log("il totatle da pagere è : "+ finalPrice);
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

var numeri = [3,1,7,10,8,5,2,4,6,9];

numeri.sort(function(e, f) {
  return e - f;
});
console.log("I valori dell'arrai sono stati ordinati dal piu basso al piu alto: " + numeri);
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let g = 5
let h = 187
console.log(typeof (g) );
console.log(typeof (h) );
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let numero = 66;
let risultato = (numero % 2);

if (risultato != 0) {
  console.log('Numero dispari!');
}else {
  console.log('Numero pari!');
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console 
  il messaggio corretto in ogni circostanza.
  */
 

/* SCRIVI QUI LA TUA RISPOSTA 
let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val == 7) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num = 20 
if (num < 5 ){
  console.loge("Tiny");
} else if(num<10){
    console.log("Small")
  }else if(num<10){
      console.log("Medium")
    }else if(num<15){
        console.log("Large")
      }else if (num >= 20){
      console.log("Huge")}
*/
      
  


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let gender = "male";

let isMale = gender="male"? "yes is male" : "no is not male";

console.log(isMale)*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let x1 = 0;

while (x1 < 5){
  x1++;
  console.log("utilizzo del ciclo while "+x1);
}
*/
/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 let x2 = 11;

 for (i=0; i<x2; i++){
  console.log("utilizzo del ciclo for "+i)
 }
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 x4 = 11;

 for (i=0; i<=10; i++){
  
  if (i!=3 && i!=8){
    console.log("utilizzo del ciclo for "+i)
  }
 }
*/
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

x3 = 0;
let numDispari;
let numPari;

 while (  x3 < 15){
x3++;
if (x3 % 2 == 0) {
  console.log("i num pari sono " + x3)
} else if (x3 % 2 ==1){
  console.log("i num dispari sono" + x3)
}
   
}

*/
/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let day = 5;

switch(day){
  case 1:
  console.log("Lunedi");
  break;
  case 2:
  console.log("Martedi");
  break;
  case 3:
  console.log("Mercoledi");
  break;
  case 4:
  console.log("Giovedi");
  break;
  case 5:
  console.log("Venerdi");
  break;
  case 6:
  console.log("Sabato");
  break;
  case 7:
  console.log("Domenica");
  break;
}
