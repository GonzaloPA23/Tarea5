/* 
        EJERCICIO 41
Crea una función llamada saludar que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!"
*/

function saludar(nombre){
    console.log(`¡Hola ${nombre}!`)
}

saludar("Gonzalo");

/* EJERCICIO 42
Convierte la función saludar en una función flecha.
*/

let saludo = nombre => console.log(`Ten un buen día ${nombre}`);

saludo("Piero");