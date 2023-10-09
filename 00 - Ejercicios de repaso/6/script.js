// Escribe un programa para una empresa de alquiler de coches.
// Tendremos que preguntar al usuario la edad. Si el usuario es menor de
// 18, no podrá alquilar un vehículo y se lo diremos en pantalla. En caso
// de ser mayor de edad, le preguntamos si tiene carnet de conducir. Si la
// respuesta es negativa, no podrá alquilar un coche y se lo advertiremos
// por pantalla. Si es mayor de edad le pediremos tanto nombre como
// apellido, ciudad de recogida del vehículo y número de días que quiere
// alquilar el coche (el alquiler del coche por día tiene un coste de 25
// euros y en caso que lo alquile una semana, el coste será de 150
// euros). Imprimir por pantalla los datos


let age = parseInt(prompt("Indica tu edad"));
let carnet;
carnet = true;
let dia = 25;
let semana = 150;

if (age >= 18) {
    let carnet = prompt("¿Tienes carnet de conducir?");
    if (carnet === "si") {
        carnet = true;
        let dias = prompt("¿Cuantos días necesitas el vehiculo?");
        if (dias <= 7) {
            let nom = prompt("Indica nombre y apellido");
            let ciudad = prompt("Ciudad de recogida del vehiculo");
            console.log(`Nombre y apellidos: ${nom}`);
            console.log(`Ciudad de recogida: ${ciudad}`);
            console.log(`Número de días que quiere el vehiculo: ${dias}`);
            console.log(dias * dia + "€");
        } else {
            let nom = prompt("Indica nombre y apellido");
            let ciudad = prompt("Ciudad de recogida del vehiculo");
            let semanas = Math.trunc(dias / 7);
            let calculo = (dias * dia) - (semanas * dia);
            console.log(`Nombre y apellidos: ${nom}`);
            console.log(`Ciudad de recogida: ${ciudad}`);
            console.log(`Total a pagar por el vehiculo: ${calculo}€`);
        }
    } else {
        alert("No puedes alquilar un coche");
    }

} else {
    alert("Eres menor, no puedes alquilar un coche");
}



// while (dias >= 7) {
//     dias -= //dias = dias - 7
//         semanas ** // semanas = semansa + 1
// }
// let preciototal = dias * 25 + semanas * 150;