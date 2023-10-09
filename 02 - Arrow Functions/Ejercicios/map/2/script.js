// Dada un array de temperaturas en grados Celsius, crea una función arrow que use map para convertirlas a grados Fahrenheit.
//(0 °C × 9 / 5) + 32 = 32 °F

let temp = [20, 25, 30, 15, 22.5, 18, 28, 10]

tempFah = temp.map(grados => (grados * 9 / 5) + 32)
console.log(tempFah);