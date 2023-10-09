// Usa la API https://randomuser.me/ para generar un usuario aleatorio. Crea un div en el que aparezca la foto, el nombre, el email, la dirección (street name, street number,  city, state, country, postcode)

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((response) => {
        let contenedor = document.querySelector("#div")

        let foto = document.createElement("img")
        let nombre = document.createElement("h1")
        let email = document.createElement("p")
        let direccion = document.createElement("p")

        foto.src = response.results[0].picture.large

        nombre.textContent = response.results[0].name.title + " " + response.results[0].name.first + " " + response.results[0].name.last

        email.textContent = response.results[0].email

        direccion.textContent = response.results[0].location.street.name + " " + response.results[0].location.street.number + " " + response.results[0].location.city + " " + response.results[0].location.state + " " + response.results[0].location.country + " " + response.results[0].location.postcode

        contenedor.appendChild(foto)
        contenedor.appendChild(nombre)
        contenedor.appendChild(email)
        contenedor.appendChild(direccion)
        console.log(response);

    });