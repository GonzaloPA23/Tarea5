/* 
        EJERCICIO 91
Ejercicio similar al Project Euler #1:
Encuentra la suma de todos los números naturales múltiplos de 3 o 5 por debajo de 1000.
*/

let sumaNumeros = () =>{
    let suma = 0;
    for(let i = 1; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            suma += i;
        }
    }
    return suma
}

console.log(sumaNumeros());
