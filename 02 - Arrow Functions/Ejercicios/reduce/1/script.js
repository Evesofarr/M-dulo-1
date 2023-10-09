// Dada una array de números, crea una función arrow que use reduce para calcular la suma de todos los elementos.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let total = nums.reduce((total, actual) => total + actual);

console.log(total);