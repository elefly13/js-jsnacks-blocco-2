// Generatore di “nomi cognomi” casuali: 
// prendendo una lista di nomi 
var nomiLista = ["Marco", "Luca", "Paolo","Ugo",];

// e una lista di cognomi, 

var cognomiLista = ["Rossi", "Bianchi", "Verdi","Neri",];

// Gatsby vuole generare una falsa lista di invitati.

var randomNomi;
var randomCognomi;

for (i = 0; i < 4; i++) {
    randomNomi = Math.floor(Math.random()* nomiLista.length);
    randomCognomi = Math.floor(Math.random()* cognomiLista.length);
    console.log((nomiLista[randomNomi]) + (" ") + (cognomiLista[randomCognomi]));
}


