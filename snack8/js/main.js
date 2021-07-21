// Crea un array di numeri interi
var numeriInteri = [1, 4, 6, 87, 90, 3, 23, 30];
console.log(numeriInteri);

//  e fai la somma di tutti gli elementi che sono in posizione dispari

var sommaPosDispari = 0;


for (i = 1; i < numeriInteri.length; i+=2) {
    sommaPosDispari += numeriInteri[i];
}

console.log(sommaPosDispari);