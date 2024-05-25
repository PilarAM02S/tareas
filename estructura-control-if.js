//Estructura de control IF
const num1 = 10;
const num2 = 15;
//const esIgual = num2 ===num1;

/**if (esIgual) { //En caso de que se cumpla
        //Cualquier cosa en mi codigo      
} */


if (num2 ===num1) {//En caso de que se cumpla
    //Cualquier cosa en mi codigo  
    console.log('El num1 es igual al num2') 
} else {
    console.log('El num2 no es igual al num1')
}

/*
si (verdadero) {
    imprimir ('El num2 es igual al num1')
} sino {
    imprimir ('El num2 no es igual al num1')
}
*/

//Estructura de control IF con texto

const myEstado = "Terminado";

const estado1 = "pendiente";
const estado2 = "En proceso";
const estado3 = "Terminado";

if(myEstado === "pendiente") {
    console.log('La tarea está pendiente')
}

if(myEstado === "En proceso") {
    console.log('La tarea está en proceso')
}

if(myEstado === "Terminado") { //en llugar de ponerlo textualmente puedo poner estado3 y asi
    console.log('La tarea está terminada')
}
 
/*Otra forma de hacerlo
si(verdadero) {

} si no {
if(myEstado === estado1) {
    console.log('La tarea está pendiente')
} else if (myEstado === estado2) {
    console.log('La tarea está en proceso')
} else if (myEstado === estado3) {
    console.log('La tarea está terminada')
} else {
    console.log('La tarea es incorrecta')
}
 Ejemplo:

*/
//&& - ||

if(myEstado === "En proceso") {
    console.log('La tarea está en proceso')
} else {
    console.log('La tarea está incorrecta')
}

if(myEstado !== estado1  || myEstado !== estado2 || myEstado !== estado3 ) {
    console.log('Estado de tarea incorrecto')
}