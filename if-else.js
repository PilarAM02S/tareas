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
 



