// CONDICIONALES Y COMPARACIONES

// COMPARACIONES ==

// COMPARACIONES ====

// true es la misma contraseña y false una contraseña diferente

let ContraseñaDB = "JoE"

let contraseña = "JoE"

let result = contraseña == ContraseñaDB

console.log(result)

// si resultado es igual a true imprime el resultado de consola
if (result == true) {
    console.log("Login Correcto");
    // caso contrario muestrame esto
} else if (result == false)  {
    console.log("Login Incorrecto")
// si ninguno de estos muestrame este
}else {
    console.log("Esto no deberia pasar")
}


//


let PasswordRCN = "Colombia.23"

let PasswordUser = "Colombia.23"

let resultado = PasswordRCN == PasswordUser;

if (resultado == true) {
    console.log("Bienvenido Usuario")
}else if (resultado == false) {
    console.log("Usuario Denegado")
}else{
    console.log("Intente de Nuevo");
}


// Condicionales con numeros de mayor o menor dependiendo de su variable

let NumeroUno = "40";
let NumeroDos = "60";
// En este caso lo imprimos en la pagina y no en consola
if ( NumeroUno > NumeroDos) {
    document.write("Numero Uno es mayor que Numero dos")
}else if (NumeroUno < NumeroDos  ){
    document.write("Numero Dos es mayor que Numero Uno")
    // caso contrario
}else{
    document.write("Son iguales");
}


// Condicional con otros if

let score = 40;

if (score > 50 ){
    console.log("Su puntuacion es excelente")
}
else if (score > 30){
    console.log("Su puntuacion puede mejorar ");
}else{
    console.lo 
}



