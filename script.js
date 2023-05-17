/* 
        EJERCICIO 34
Ejercicio de condicionales:
Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.
*/

let ValidarMayor = (a,b) =>{
    (a > b) ? console.log(a,"Es mayor que", b) : console.log(b,"Es mayor que",a);
}

ValidarMayor(220,120);