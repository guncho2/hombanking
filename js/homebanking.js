//Declaración de variables
var nombreUsuario = "Eduardo";
var saldoCuenta = 20000;
var limiteExtraccion = 5000;
const codigoSeguridad = 1010;




//VARIABLES PAGO DE SERVICIOS



var Agua = 350;
var Luz = 425;
var Internet = 210;
var Telefono = 570;

//Variables cuentas

var ctaCte = ["Cuenta Corriente", 12345];
var ctaChr = ["Caja de Ahorro", 54321];


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

}

//FUNCIONES VALIDAR

//VALIDAR Limite
function ValidLimitExt(monto) {
    if (monto <= limiteExtraccion) {
        return true;
    } else if (monto >= limiteExtraccion) {
        alert("Se ha exedido de su Limite para Operar");
        return false;
    }
}

function validSaldo(monto) {
    if (monto <= saldoCuenta) {
        return true;
    } else if (monto >= saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer o transferir esa cantidad de dinero ");
        return false;
    }
}



function validMulti(monto) {
    if (monto % 100 == 0) {
        return true;
    } else {
        alert("Por favor Extraiga o Deposite multiplos de 100$ solamente Gracias");
        return false;
    }
}

function valValid(monto) {
    if (isNaN(monto)) {
        alert("Ingrese un monto valido");
        return false;
    } else {
        return true;
    }
}

function extrMont(monto) {
    saldoCuenta = saldoCuenta - monto;
}


function depMont(monto) {
    saldoCuenta = saldoCuenta + monto;
}




//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

    var limite = parseInt(prompt("Ingrese el Limite de Extraccion"));
    if ((validSaldo(limite)) && (validMulti(limite)) && (valValid(limite)) &&
        (validSaldo(limite))) {
        var limiteExtraccionAnterior = limiteExtraccion;

        alert("Tu nuevo Limite de Extraccion es de: $" +
            limite + ".\n Tu nuevo Viejo Limite de Extraccion fue de: $" + limiteExtraccionAnterior);
        limiteExtraccion = limite;
        actualizarLimiteEnPantalla();
    }

}

function extraerDinero() {
    monto = parseInt(prompt("Ingrese el Monto a Extraer"));
    if ((ValidLimitExt(monto)) && (validMulti(monto)) && (valValid(monto)) &&
        (validSaldo(monto))) {
        var saldoAnterior = saldoCuenta;
        extrMont(monto);

        alert("Has Extraido $ " + monto + ".\n Tu Saldo anterior fue de: $" +
            (saldoAnterior) + ".\n Tu nuevo saldo es de $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }

}



function depositarDinero() {
    monto = parseInt(prompt("Ingrese el Monto a Depositar"));
    if ((validMulti(monto)) && (valValid(monto))) {
        var saldoAnterior = saldoCuenta;
        depMont(monto);

        alert("Has depositado $ " + monto + ".\n Tu Saldo anterior fue de: $" +
            (saldoAnterior) + ".\n Tu nuevo saldo es de $" + saldoCuenta);
        actualizarSaldoEnPantalla();

    }
}

function pagoDeServicio(servicio, monto) {
    var monto = servicio;
    if ((valValid(monto)) &&
        (validSaldo(monto))) {
        var saldoAnterior = saldoCuenta;
        extrMont(monto);
        alert("Has pagado en servicio$ " + monto + ".\n Tu Saldo anterior fue de: $" +
            (saldoAnterior) + ".\n Tu nuevo saldo es de $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

//EL PAGO DE SERVICIO ESTA HECHO EN FUNCION pagoDeServicio

function pagarServicio() {
    var servicio = prompt("Elija el servicio a pagar" + '\n' +
        "1." + "Agua" + ":$" + "350" + '\n' +
        "2." + "Luz" + ":$" + "425" + '\n' +
        "3." + "Internet" + ":$" + "210" + '\n' +
        "4." + "Telefono" + ":$" + "570" + '\n' +
        "Que servicio desea abonar")



    switch (servicio) {
        case "1":
            pagoDeServicio(Agua);

            break;
        case "2":
            pagoDeServicio(Luz);
            break;

        case "3":
            pagoDeServicio(Internet);
            break;
        case "4":
            pagoDeServicio(Telefono);
            break;

        default:
            alert("por favor pague el servicio correcto");
            return false;
            break;
    }



}


function transferirDinero() {
    var monto = parseInt(prompt("Cuanto desea transferir"));


    if ((validSaldo(monto)) && (validMulti(monto))) {

        var destTransfer = parseInt(prompt("Ingrese numero de cuenta: 12345 o 54321 ?"));

        if (destTransfer == ctaCte[1] || destTransfer == ctaChr[1]) {



            var saldoAnterior = saldoCuenta;
            saldoCuenta = saldoCuenta - monto;
            actualizarSaldoEnPantalla();
            alert("Usted ha transferido $ " + monto + '\n' +
                "Tu saldo anterior es de" + saldoAnterior + '\n' +
                "Tu saldo actual es de" + saldoCuenta + '\n' +
                "Cuenta de destino: " + destTransfer);

        } else {
            alert("La cuenta ingresada no es valida");
            return false;
        }

    }

}

function iniciarSesion() {

    let pregunta = prompt('Bienvenido ' + nombreUsuario + '\n' + 'Ingrese su codigo de seguridad');
    if (pregunta != codigoSeguridad) {
        alert('Codigo incorrecto ' + '\n' + 'Su dinero ha sido retenido');
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    } else {
        (pregunta === codigoSeguridad)
        alert('Bienvenido a su homebanking');
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}