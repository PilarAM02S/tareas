//Objeto

//Representar un objeto, que puede contener propiedades y un nombre

//Como crearlo por medio de instancia
//const persona = new Object ();
//

const amigos = ["Linzed", "Nao", "Jeaus"];


const persona = new Object ();

persona.nombre = 'Pilar';

console.log(persona)

//Como crearlo como Objeto literal
const persona = {
    nombre: "Pilar",
    edad: 23, {
        trabajo: 'Desarrollador'
        empresa: 'Amazon'
    }
    casado: false,
    amigos: [Nalle, Hila], //Puedo poner solo amigos: amigos , y ya JavaScript va a entender que son los escritos en la linea 7
};

const carro = {
  marca:
  age:  
};

//[clave]: [valor]
//Se puede trabajar con numeros, mas objetos, cadenas de caracteres
console.log(persona);



//Como como obtener el valor de una propiedad o como acceder a una propiedad
//
o 
const nombre = persona.nombre;
console.log(nombre)

const edad = persona ['edad'];
console.log(edad);

const ciudad = persona ['ciudad'];
console.log(ciudad);

//Cuando tengo "" en el const cuando quiero editarlo, accesar, se debe usar []
ejemplo 
"ciudad": "Limon"
"nombre y apellido" : "Pilar Avila"

const ciudad = persona ['ciudad']
console.log(ciudad)

const nombreCompleto = persona ['nombre y apellido']
console.log(nombreCompleto)



//Como cambiar el valor de una propiedad
persona.nombre = "Pepe"
console.log(persona)


persona.trabajo.empresa = "Google"
persona.trabajo.ciudad = "Alajuela"


//Como agregar una propiedad
persona.mascota = "Gato";

console.log(persona)


//Como eliminar una propiedad. Ejemplo si ya no quiero la propiedad mascota
delete persona.mascota;

console.log(persona)

//Como obtener las claves de un objeto
cons listaClaves = Object.keys(persona);

// cons listaClaves = Object.keys(persona.trabajo); Si quiero ver las claves de una clave 

console.log(listaValores)

//Como obtener los valores de un objeto
const listValores = Object.values(persona)

console.log(listaValores)
//Tambien se puede buscar en la documentacion


//Como evitar cambiar un objeto
