// Escriba un programa que pida al usuario una suma y que te devuelva
// por consola los números que forman parte de la operación. Por
// ejemplo: 23+56 → el programa devolverá 23 y 56.

let suma = prompt("indica una suma");
let symb = suma.indexOf("+");
let num1 = suma.substring(0, symb)
let num2 = suma.substring(symb + 1)

console.log(`${num1} y ${num2}`);