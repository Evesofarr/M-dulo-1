// Escribe un programa que pida un número de minutos y muestre
// cuantos años y días son.

let mins = parseInt(prompt("indica uos minutos"))
let minsDay = 60 * 24;
let minsYears = minsDay * 365;
let years = mins / minsYears;
let days = (mins % minsYears) / minsDay;

console.log(`${mins} minutos son aproximadamente ${years} años y ${days} días`);