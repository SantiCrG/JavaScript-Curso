/// Uso de SWITCH CONDICIONAL

let Tarjetas = "Debito";

// tomamos el tipo de tarjeta 
switch(Tarjetas){
// en caso 
case "Debito":
    console.log("Esta es una tarjeta de Debito")
    // se finaliza esta parte del switch con el break
    break;
    // de igual manera podremos abrir otro en caso pase esto
    case "Credito":
        console.log("Esta es una tarjeta de Credito");
    break;

// que pasa si no es ninguno de estos valores
// se utiliza default como un else
    default:
        console.log("No tiene ninguna tarjeta del sistema ")
}


// PRACTICA 2

let war = "Colombia"

switch(war){
    case "Ucrania":
        console.log("Ucrania es un pais que esta en guerra en estos momentos 2023 Contra rusia")
        break;
    case "Rusia":
        console.log("Rusia es un pais que esta actualmente en guerra con ucrania en 2023 para expandirse mas")
        break;
    case "Estados Unidos":
        console.log("Estados unidos es una potencia mundial que participo en todas las guerra de antes y posiblemente actuales")
        break;
    default:
        console.log("Esta informacion aun no se ha subido a este IA")
}
