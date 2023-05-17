/* 
        EJERCICIO 72
Ejercicio de funciones flecha:
Convierte la función esPrimo en una función flecha.
*/


let esPrimo = numero =>{
    if (numero === 1) return false;
    for(let i = 2; i < numero; i++){
        if (numero % i === 0) return false;
    }

    return true;
}

console.log(esPrimo(5))

