// Crea una página con tres cajas de texto en la que se l e pida al usuario un año, un mes y un día. Al apretar un botón, se l e hace una petición a la API de la NASA de APOD, y muestra la fecha, el título, la imagen y la descripción en la página. Para usar la API de la NASA se necesita una clave de verificación.

let año = prompt("Indica un año. Ej:1995")
let dia = prompt("Indica un día. Ej:01")
let mes = prompt("Indica un mes. Ej:01")
fecha = año + "-" + mes + "-" + dia;

fetch(`https://api.nasa.gov/planetary/apod?api_key=wgdxule3SHcfLkmjrwiJ8jYC9UrNPkWkCHFzmwnP&date=${fecha}`)
    .then(response => response.json())
    .then((response) => {

        let div = document.querySelector("#contener")

        response.date = fecha;

        img = document.createElement("img")

        img.src = response.url


        div.appendChild(img)

        console.log(response);

    });