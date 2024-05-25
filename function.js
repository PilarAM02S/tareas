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


