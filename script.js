/* 
    EJERCICIO 25
Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. (La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores).
*/

let Fibonacci = (numero) =>{
    let fb = [0,1];
    for(let i = 2; i<=numero; i++){
        fb[i] = fb[i-1] + fb[i-2];
    }
    return fb;
}
console.log(Fibonacci(10));
