/* Escribe un programa que dice si los dígitos de un número de tres cifras
son todos impares, todos pares o son mezclados. Tu programa debe
pedir un número al usuario, y mostrar el número, seguido del mensaje
"Todas las cifras son pares", "Todas las cifras son impares" o "El
número tiene cifras pares e impares". */

let numero = prompt("Indica un numero de 3 cifras");
let arraynum = [];

for (let i = 0; i < numero.length; i++) {
  arraynum.push(parseInt(numero[i]));
}
if (arraynum[0] % 2 == 0 && arraynum[1] % 2 == 0 && arraynum[2] % 2 == 0) {
  console.log("Todos son pares");
} else if (
  arraynum[0] % 2 == 1 &&
  arraynum[1] % 2 == 1 &&
  arraynum[2] % 2 == 0
) {
  console.log("Todos son impares");
} else {
  console.log("Hay numero pares e impares");
}

/* let numero = prompt("Indica un numero de 3 cifras");
let par = 0;
let impar = 0;

for (let i = 0; i < numero.length; i++) {
    parseInt(numero[i]) % 2 === 0 ? par++ : impar++;
}
if (par === 0) {
    console.log("Pares");
} else if (impar === 0) {
    console.log("Impares");
} else {
    console.log("mixtos");
} */
