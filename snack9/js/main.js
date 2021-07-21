// Crea due array che hanno un numero di elementi diversi.
var lista1 = ["zucchine", "pomodori", "olio"];
console.log(lista1);

var lista2 = ["pasta", "riso", "miglio", "lenticchie", "ceci", "fagioli", "patate", "cipolle"];
console.log(lista2);
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
//il softwere deve chiedere per x volte di inserire un elemento

var alimento;

for (i = 0; i < lista2.length; i++) {
    if (lista1.length < lista2.length) {
        alimento = prompt("scrivi il tuo alimento preferito");
        lista1.push(alimento);
        console.log(lista1);
    }
}


