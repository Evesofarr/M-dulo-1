// Escribe un programa que pida al usuario un dígito (n) y calcule y
// muestre el valor de n+nn+nnn. Por ejemplo, si el usuario introduce 5
// el programa calcularía 5 + 55 + 555.

let num = prompt("introduce un numero");

let num1 = num;
let num2 = num + num;
let num3 = num + num + num;

let result = num1 + " + " + num2 + " + " + num3;

console.log(result);

// num1 = parseInt(num1)
// num2 = parseInt(num2)
// num3 = parseInt(num3)
// console.log(num1 + num2 + num3);

let numeros = [num1, num2, num3]

for (let i = 0; i <= 2; i++) {
    numeros[i] = parseInt(numeros[i])
}
console.log(numeros[0] + numeros[1] + numeros[2]);
