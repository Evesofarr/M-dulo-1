// Crea una función arrow pura que tome un array de números como argumento y devuelva el número más grande.


let nums = [20, 25, 30, 15, 22, 18, 28, 10]
let big = (numeros) => Math.max(...numeros);
let resultado = big(nums)
console.log(resultado);