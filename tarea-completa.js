//Crear un array llamado números que contenga los números del 1 al 10.
const numeros = [1,2,3,4,5,6,7,8,9,10];
// Imprimir en la consola el tercer elemento del array.
 console.log (numeros[2]);
// Agregar el número 11 al final del array.
 numeros.push(11);
 console.log (numeros);
 //Eliminar el primer elemento del array.
 numeros.shift();
 console.log (numeros);
// Imprimir en la consola todos los elementos del array utilizando un bucle for.
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }

  /*Crear un objeto Date con la fecha actual.
● Imprimir en la consola el año actual.
● Imprimir en la consola el mes actual (recordar que los meses empiezan en 0).
● Crear una nueva fecha que sea el 1 de enero del próximo año.*/

const fechaActual = new Date();

let añoActual = fechaActual.getFullYear();  //Tuve que ponerle nombre para poder añadirle el año
console.log(fechaActual.getFullYear());

//let mesActual = fechaActual.getMonth();
console.log(fechaActual.getMonth());

let proximoAño = añoActual+ 1;
let nuevaFecha = new Date(proximoAño, 0, 1);
console.log(nuevaFecha);

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

/*Crear una función llamada saludar que tome un parámetro nombre y devuelva un
mensaje de saludo.
● Crear una función llamada sumar que tome dos parámetros a y b, y devuelva su
suma.
● Llamar la función saludar con su nombre y mostrar el resultado en consola.
● Llamar la función sumar con los números 5 y 7, y mostrar el resultado en la consola */

function saludar (nombre) {
    return `Hola ${nombre}!`;
}

function sumar (a, b) {
    return a + b;
}

const nombre = 'Pilar';
console.log(saludar(nombre));

const a = 5;
const b = 7;

console.log(sumar (a, b));
/*Crear una función llamada evaluarNota que tome una nota (número) como
parámetro.
● Utilizar una estructura if, else para imprimir "Aprobado" si la nota es mayor o igual a
5 y "Reprobado" si es menor.*/

//extra 
let numero = Math.floor(Math.random() * 10) + 1;

console.log(numero);


function evaluarNota(nota) {
    if (nota >= 5 ) {
        console.log('aprobado');
    }

    else {
        console.log('reprobado');
    }
};

evaluarNota(numero);
 
//const persona = new Object()
/*
Crear un objeto llamado persona con las propiedades nombre, edad y ciudad.
● Imprimir en la consola el nombre de la persona.
● Cambiar la ciudad de la persona a "San José" u otro.
● Agregar una nueva propiedad llamada ocupación con el valor "Estudiante".
● Imprimir en la consola todas las propiedades del objeto.
*/

const persona = {
    nombre: "Pilar",
    edad: 22,
    ciudad: "San Jose",
};
console.log(persona.nombre)

persona.ciudad = 'Alajuela';

 persona.ocupacion = 'estudiante';

 console.log(persona);