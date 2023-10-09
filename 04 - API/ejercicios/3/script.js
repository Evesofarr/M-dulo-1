// Crea una página con tres cajas de texto en la que se l e pida al usuario un year, un month y un día. Al apretar un botón, se l e hace una petición a la API de la NASA de APOD, y muestra la fecha, el título, la imagen y la descripción en la página. Para usar la API de la NASA se necesita una clave de verificación.


let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let year = document.querySelector("#year").value
    let day = document.querySelector("#day").value
    let month = document.querySelector("#month").value
    fecha = year + "-" + month + "-" + day;


    fetch(`https://api.nasa.gov/planetary/apod?api_key=wgdxule3SHcfLkmjrwiJ8jYC9UrNPkWkCHFzmwnP&date=${fecha}`)
        .then(response => response.json())
        .then((response) => {

            let div = document.querySelector("#contenedor")

            response.date = fecha;

            img = document.createElement("img")
            fechatitu = document.createElement("h1")
            expla = document.createElement("p")

            img.src = response.url
            fechatitu.textContent = response.date + " " + response.title
            expla.textContent = response.explanation


            div.appendChild(img)
            div.appendChild(fechatitu)
            div.appendChild(expla)

            console.log(response);

        });
});