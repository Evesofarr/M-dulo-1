// Escribe un programa que calcule el resto de dividir dos números sin
// utilizar el operador de división de resto (%)
let num1 = parseInt(prompt("indica un numero"));
let num2 = parseInt(prompt("indica otro numero"));

let calculo = num1 / num2;
console.log(calculo);

let numletra = calculo.toString()
console.log(typeof (numletra));
let punto = numletra.indexOf(".")
console.log("El resto de calcular " + num1 + " entre " + num2 + " es " + numletra.substring(punto));