/* 
        EJERCICIO 44
Ejercicio de funciones:
Crea una función llamada calcularPromedio que tome un arreglo de números como argumento y devuelva el promedio de esos números.
*/

function calcularPromedio(...numeros) {
  let p = 0;
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return (p = suma / numeros.length);
}
console.log("Del ejercicio 44:");
console.log(calcularPromedio(1, 2, 3));
console.log(calcularPromedio(18.5, 12.6, 15.6, 17.9));

/* 
        EJERCICIO 45
Ejercicio de funciones flecha:
Convierte la función calcularPromedio en una función flecha.
*/
let calcularPromedio2 = (...numbers) => {
  let promedio = 0;
  let sumita = 0;
  for (let num of numbers) {
    sumita += num;
  }
  return (promedio = sumita / numbers.length);
};
console.log("Del ejercicio 45:");
console.log(calcularPromedio2(43, 43, 32, 34, 23));
console.log(calcularPromedio2(20, 12.5, 20, 12.5));
