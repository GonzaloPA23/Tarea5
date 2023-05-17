/* 
        EJERCICIO 71
Crea una función llamada esPrimo que tome un número como argumento y devuelva true si es un número primo y false si no lo es.
*/


function esPrimo(numero){
    if (numero === 1) return false;
    for(let i = 2; i < numero; i++){
        if (numero % i === 0) return false;
    }

    return true;
}

console.log(esPrimo(47))

