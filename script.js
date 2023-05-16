/* 
    EJERCICIO 4
Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares.
*/

let arregloNumeros = [2,5,10,30,27,1,40,-20]
let numerosPares = arregloNumeros.filter((numero)=>{
    if(numero%2 === 0){
        return true;
    }
})

console.log("Dado el siguiente arreglo: ", arregloNumeros);
console.log("El núevo arreglo con solo los números pares es:", numerosPares);