
//Pruebas
//console.log( {
 /*   esIgual,
    esMayor,
    esDiferente,
    esMayor,
    esMenor,
    esMayorIgualQue,
    esMenorIgualQue
} ); */

//Operadores Booleanos
// && = and
// || = Or
//  ! = Not
 //            true     true
const AND = (5 > 3) && (10 < 9); //true

//          false       true
const OR = (5 < 3) || (10 < 20); // true, con almenos uno true da true

//           True pero al tener el signo se va a imprimir como falso
const NOT = !(5 > 3); //El signo de admiracion lo niega, le pone el contrario, si está true lo hace false y viceversa

console.log({AND, OR, NOT}); 
