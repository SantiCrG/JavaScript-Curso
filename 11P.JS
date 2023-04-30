// FUNCIONES JAVASCRIPT

        //Desarrollo de la funcion
    //1) Creamos la funcion - Function
    //2) Asignamos el nombre a la funcion en este caso Saludo
    //3) Abrimos una tarea al lado del nombre -> ()
    //4) Abrimos y cerramos llaves


    // EN FUNCTION PODEMOS AGREGAR VARIABLES,FOR,WHILE,SWITCH ETC...

// Se crea la funcion
function Saludo(){

    console.log("Holaa");
}

// LLamamos la funcion para que el codigo lo lea
// !!PODEMOS LLAMARLA CUANTAS VECES QUERAMOS CON NUESTRO PARAMETRO
Saludo();
Saludo();
Saludo();



                /// PARAMETROS

// Creamos un nuestra funcion con un nombre en este caso NombreClave
function holipa(NombreClave){
console.log(NombreClave)
}

// al llamar nuestro parametro cuando lo ejecutemos si este no tiene un valor nos sadra undifined
// Al asignarle a nuestro parametro un valor entonces el NombreClave ya tendra un valor y asi se ejectuara nuestro valor
//en la funcion
holipa("Valor");




// EJEMPLO CON EL MISMO PARAMETRO PERO SUMANDOLE OTRO VALOR 
function Cesar(CesarClave){
    console.log(CesarClave + " " + "Otro Valor")
    }

// USANDOLO VARIAS VECES PERO CON DIFERENTES VALORES
Cesar("Daniel");
Cesar("Santiago");
Cesar("Luis");



/// EJEMPLO CON NUMEROS

// sumando con otros numeros
function Sumas(Numero1, Numero2){
console.log(Numero1 + 3, Numero2 + 3)
}

Sumas(2, 2)


// Sumando ente si
function Suma2(Numero3, Numero4){
    console.log(Numero3 + Numero4 )
    }
    
    Suma2(2, 2)


    // Suma entre si pero con mas parametros
function Suma3(Numero5, Numero6){
    console.log(Numero5 + Numero6 )
    }
    
Suma3(20, 20)
Suma3(100, 10)
Suma3(10, 5)
Suma3(30, 30)
Suma3(2, "Gonorrea")