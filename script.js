/* 
        EJERCICIO 87
Ejercicio de funciones:
Crea una función llamada calcularPotencia que tome dos números como argumento: la base y el exponente, y devuelva el resultado de elevar la base al exponente.
*/


function calcularPotencia(base,exponente){
    return base ** exponente;
}

let n = 2;
let exponente = 3;
console.log(n,"^",exponente,"=",calcularPotencia(n,exponente))

