// Utilizar la base de datos de Star Wars (disponible en https://swapi.dev/documentation), para obtener la lista de planetas y mostrarlos en un dropdown (etiqueta select). 


let select = document.getElementById("select-api");


fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(planet => {
            let option = document.createElement("option");
            option.value = planet.name;
            option.text = planet.name;
            select.appendChild(option);

        });
    });