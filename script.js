/* 
    EJERCICIO 23
Ejercicio combinado:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números que sean múltiplos de 3. Luego, utiliza el método reduce para calcular la suma de los números seleccionados.
*/

let arregloDeNumeros = [12,32,35,23,11,3,5,6,9,10,1]

let nuevoArregloM3 = arregloDeNumeros.filter((numero)=>{
    if(numero % 3 === 0){
        return numero;
    }
})

let sumaDelNuevoArreglo = nuevoArregloM3.reduce((acumulador,numero)=>{
    return acumulador += numero;
},0)

console.log("Dado el siguiente arreglo de números:",arregloDeNumeros)
console.log("El nuevo arreglo de números que son múltiplos de 3: ",nuevoArregloM3);
console.log("La suma total del nuevo arreglo",sumaDelNuevoArreglo);
