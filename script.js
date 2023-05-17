/* 
        EJERCICIO 88
Ejercicio de funciones flecha:
Convierte la función calcularPotencia en una función flecha.
*/


let calcularPotencia = (base, exponente) =>{
    return base ** exponente;
}

let n = 2;
let exponente = 3;
console.log(n,"^",exponente,"=",calcularPotencia(n,exponente))

