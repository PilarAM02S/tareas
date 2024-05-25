
alert ('Hola!')
//comentario en una sola línea
//console.log (¨Hola mundo desde el navegador¨);


/* COmentario de varias líneas
console.log ¨(esto no debería de mostrarse)¨
console.log ¨(esto no debería de mostrarse)¨
console.log ¨(esto no debería de mostrarse)¨
console.log ¨(esto no debería de mostrarse)¨
*/


// Undefined
let esUndefined; //  Imprimir valores
console.log( typeof esUndefined);

// string
let nombre = "Rafa";  //Crear e inicializar la variable con su dato
 console.log (typeof nombre);

// Tipo de dato null
let esNull = null;
console.log (typeof esNull);

//Tipo de dato Boolean
let esoolrano = true //true or false
console.log (typeof esBoleano);

//Tipo de dato number
let edad = 20;
console.log (typeof edad);


let variable = new Date(28-4-2024);



// undefined
let nombre5;
nombre = null; 
console.log (nombre);
//alert (alerta!);


//Tipo de dato boolean
nombre = true;
nombre = false;

//Tipo de dato number
nombre = 20;
nombre = 20.2152;


//Tipo de dato string/texto
nombre = "Casa";

//Tipo de dato symbol
nombre = Symbol ('a');

console.log (typeof nombre);


// let segundonombre = "Antonio";
// let apellido = "Sequeira";
// let edad = 23;
// let estaura = 1.70;

//Proxima leccion dif entre let, var y 
//let es una paabrita especial que le dice a JavaSCRIPT QUE vamos a crear una variable
let carro = "Toyota"
carro = "Audi"
console.log (carro);

//Const Es una variable que NUNCA va a cambiar
const email = "pilaravilamadrigal@gmail"


//var
// console.log (nombre2)    Evitar esto
// var nombre2 ="Mi nombre";

// console.log ("Hola!");
if(window.innerHeight > 500) {
    console.log("Mayor a 500")
}
//No es recomendable usarlo porque probablemente podriamos sobreescribir
//Dejaron var para no dejar a los sitios viejos inutilizables
//NO SE RECOMIENDA USAR VAR EN LA PARTE DE DESARROLLO DE JAVASCRIPT

//Formas de usar cadenas de esto
let apellido = 'Sequeira';
let apellido2 = 'Perez';
let nombre2 = "Rafael"; //Creando cadena con comillas bobles
let nombre3 = 'Juan'; //Creando cadena con comillas simples
let nombre4 = `Kevin`;  //Creando cadena con backticks ESTE Permite que los enter se vean como espacios

let nombreCompleto = nombre2 + " " + apellido;  //Rafal Sequeira
let nombreCompleto2 = `${nombre4} ${apellido2}`;

console.log (nombre3);
console.log (nombre4);

console.log (nombreCompleto);
console.log (nombreCompleto2);



// let date = ()
// let nombre6 = ()

// console.log (typeof Date);
// console.log (typeof nombre);
// console.log (typeof Number);
// console.log (typeof Date);


//Solución
const fecha = '29-4-2024';
const nombrePersona= ' Pilar';
const apellidoPersona = 'Avila';
const nombreProducto1 = 'Papa';
const precioProducto1 = 2000;
const cantidadP1 = 2;
const nombreProducto2 = 'Frijoles';
const precioProducto2= 1750;
const cantidadP2 = 3;



 const totalP1 = precioProducto1 * 2;
 const totalP2 = precioProducto2 * 3;


const factura = `
Factura #1                                Fecha: ${fecha}

Nombre del cliente: ${nombrePersona} ${apellidoPersona}
---------------------------------------------------
Producto                   Cantidad              Total
${nombreProducto1}              ${cantidadP1}          ${totalP1}
${nombreProducto2}              ${cantidadP2}          ${totalP2}
-------------------------------------------------
                                                ${totalP1 + totalP2}
`;



console.log(factura);
