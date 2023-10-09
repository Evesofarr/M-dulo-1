// Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que devuelva todos los personajes. Muestra en un div las fotos y los nombres.


fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        let characterContainer = document.querySelector("#pers");


        data.results.forEach(character => {
            let characterDiv = document.createElement("div")
            let characterName = document.createElement("p")
            let characterImage = document.createElement("img")

            characterName.textContent = character.name;
            characterImage.src = character.image;

            characterDiv.appendChild(characterName)
            characterDiv.appendChild(characterImage)

            characterContainer.appendChild(characterDiv);

        })
    });