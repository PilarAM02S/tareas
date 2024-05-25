/*Crear un array llamado frutas que contenga los nombres de 5 frutas.
● Utilizar un bucle for para imprimir en la consola cada fruta del array.
● Utilizar un bucle for para imprimir en la consola el índice de cada fruta junto con su
nombre.*/

const frutas = new Array ("Melon", "Carambola", "Cas", "Guayaba", "Caimito");

console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`);
}



