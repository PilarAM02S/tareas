const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones"); // cambiar texto de este boton
const btnColonesMoneda = document.getElementById("colones-a-moneda"); // cambiar texto de este boton

const inputValorMoneda = document.getElementById("valor-moneda"); // Tomar referencia del input de colones
const inputValorColones = document.getElementById("valor-colones");

const liEUR = document.getElementById("eur");
const liUSD = document.getElementById("usd");
const liGTQ = document.getElementById("gtq");
const liMXN = document.getElementById("mxn");
const liHNL = document.getElementById("hnl");

const TIPO_CAMBIO_DOLAR_COLONES = 514.26;
const TIPO_CAMBIO_EURO_COLONES = 558.70;
const TIPO_CAMBIO_QUETZAL_COLONES = 66.67;
const TIPO_CAMBIO_PESO_COLONES = 28.69;
const TIPO_CAMBIO_LEMPIRA_COLONES = 20.91;


let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';
    btnMonedaColones.innerText = 'Euros a colones';
    btnColonesMoneda.innerText = 'Colones a euros';
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dolar';
    btnMonedaColones.innerText = 'Dólares a colones';
    btnColonesMoneda.innerText = 'Colones a dólares';
    monedaSeleccionada = 'USD';
});

liGTQ.addEventListener('click', () => {
    btnDropdown.innerText = 'Quetzal';
    btnMonedaColones.innerText = 'Quetzales a colones';
    btnColonesMoneda.innerText = 'Colones a quetzales';
    monedaSeleccionada = 'GTQ';
});

liMXN.addEventListener('click', () => {
    btnDropdown.innerText = 'Peso mexicano';
    btnMonedaColones.innerText = 'Pesos a colones';
    btnColonesMoneda.innerText = 'Colones a pesos';
    monedaSeleccionada = 'MXN';
});

liHNL.addEventListener('click', () => {
    btnDropdown.innerText = 'Lempira';
    btnMonedaColones.innerText = 'Lempiras a colones';
    btnColonesMoneda.innerText = 'Colones a lempiras';
    monedaSeleccionada = 'HNL';
});

/*liGTQ.addEventListener('click', () => {
    actualizarUI('GTQ', 'Quetzal', 'Quetzales a colones', 'Colones a quetzales');
});

liMXN.addEventListener('click', () => {
    actualizarUI('MXN', 'Peso', 'Pesos a colones', 'Colones a pesos');
});

liHNL.addEventListener('click', () => {
    actualizarUI('HNL', 'Lempira', 'Lempiras a colones', 'Colones a lempiras');
});
**/

// Crear evento click para btnMonedaColones donde imprima por consola el valor de monedaSeleccionada
btnMonedaColones.addEventListener('click', () => {
    const valorMoneda = inputValorMoneda.value; // extraer el valor del input: string

    if(valorMoneda.length === 0 || parseInt(valorMoneda) < 0){ // si no hay nada en el input o el valor es menor que 0
        alert('El valor no es correcto');
        return; 
    }

    const valorMonedaParseado = parseFloat(valorMoneda); // parsear el valor el input, de string a number

    let result = 0;


    switch(monedaSeleccionada){
        case 'USD':
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
        break;

        case 'EUR': 
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
        break;

        case 'GTQ': 
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
        break;

        case 'MXN': 
            result = valorMonedaParseado * TIPO_CAMBIO_PESO_COLONES;
        break;

        case 'HNL': 
            result = valorMonedaParseado * TIPO_CAMBIO_LEMPIRA_COLONES;
        break;


        default:
            console.error('Moneda no controlada');
            // throw new Error('Moneda no controlada'); // dispara un error, terminamos la funcion
    }

    inputValorColones.value = result.toFixed(2); // Muestra el resutado con 2 decimales
});

    