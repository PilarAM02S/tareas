//Array
//Representa una colección ordenada de elementos

 //Como crear un array

 //Creando una instancia del objeto Array

    const frutas = new Array("fresa", "manzana", "pera");
    console.log(frutas);

//Creando una instancia del objeto Array con un tamanho determinado

//const frutas = new Array(10);
//console.log(frutas2); //No puedo imprimirla sin haberla creado

//Por medio de llaves cuadradas
//const frutas3 = ['fresa', 'Kiwi', 'pina', 'uva', 5, true, false ['rafa', 'pepe']];
const frutas3 = ['fresa', 'Kiwi', 'pina', 'uva'] //Posición 0, 1, 2, etc... no se inicia en 1
console.log(frutas3);

//List<int> lista = ['hola']

 //Como obtener un determinado eelemento de un array
 //['fresa', 'Kiwi', 'pina', 'uva']
 //[0,    ,   1    ,   2  ,   3   ]

 const valorUva = frutas3[2];
 const valorBanano = frutas[3];

 console.log(valorBanano);

 //Como agregar un elemento
//const x = frutas3 
frutas3[3] = 'mango';
frutas3[4] = 'melón';
frutas3[4] = 'sandía'; //Le cae encima al que estaba antes

frutas3.push("sandia", "guayaba"); //No se memoriza la ultima posicion, sino que solo se agrega al final de la lista


frutas3.unshift("coco", "manzana"); //Se agregan al inicio de la lista, y los que había antes siguen la lista
console.log(frutas3);


 //Como eliminar un elemento
//frutas3.pop();  //Elimina el último elemento
//frutas3.shift();  //Elimina el primer elemento

//Ubicamos el lugar del elemento ejemplo 4
frutas3.splice(4); //Va a eliminar el cuarto y todo el resto 5, 6, 7 etc 
frutas3.splice(4, 1); // Va a borrar el elemento 4 y solo 1 elemento porque se lo indicamos
//Si no sabemos la posicion del elemento
const posicionUva = frutas3.indexOf('uva') //fijarse bien en las mayusculas
frutas3.splice(posicionUva)

console.log(frutas3);


 //Práctica
//Crear el siguiente array [[2,4,6,8], [1,3,5,7,9]]

 const numeros = new Array([["2", "4", "6", "8" ],["1", "3", "5", "7", "9"]]); //Teber cuidado con parentessi 
 console.log(numeros);

//
 //numeros.unshift(" " ("0"));
console.log(numeros);
 
//
numeros.splice(2);
console.log(numeros);

//
numeros.push("10");
console.log(numeros);

//Solucion


//PUNTO 2
numeros[1]
 //o guardarla como una variable  const numerosImpares = numeros[1]

 //console.log(numerosImpares) 


 //numerosImpares.unshift(0);
//console.log(numerosImpares)


//Punto 3
const numerosPares = numeros [0];
 console.log (numeros);

 //posicion valor 6 = 2
 numerosPares.splice(2,1);


 //Punto 4
 numerosPares.push("10");
console.log(numeros);

//Punto5
//numerosImpares[3]='11'

//Punto 6
numeros.unshift(100);
 console.log(numeros)

 //Punto 7
 numeros.push(200);
 console.log(numeros);

 