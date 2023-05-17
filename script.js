/* 
        EJERCICIO 36
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números divisibles por 3.
*/

let arregloDeNumeros = [30,3,1,23,45,67,10,2,5]

let nuevoArregloDivisiblePor3 = arregloDeNumeros.filter((num)=>{
    if(num % 3 === 0){
        return num;
    }
})

console.log(nuevoArregloDivisiblePor3);