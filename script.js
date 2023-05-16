/* 
    EJERCICIO 10
Ejercicio de condicionales:
Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, "Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0.
*/

let EsPositivoNegativo = (numero) =>{
    if(numero > 0){
        console.log(`El número ${numero} es positivo`)
    }else if(numero === 0){
        console.log(`El número ${numero} es cero`)
    }else{console.log(`El número ${numero} es negativo`)}
}

EsPositivoNegativo(-2343);