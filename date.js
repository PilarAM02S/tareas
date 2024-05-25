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





