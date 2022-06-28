/* Input #TO DO */ 

consultAPI(384)
    

/* Connect to API */
async function consultAPI(pokeId){
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
        const result = await fetch(url);
        pokeJson = await result.json()

        /* Parse JSON */
        pokeName = pokeJson.name
        pokeName = firstLetterUppercas(pokeName);
        pokeImg = pokeJson.sprites.front_default

        /* Poke Name */
        document.getElementById('pokemon_name').innerHTML = pokeName
        
        /* Poke Img */
        document.getElementById('pokemon_img').src = pokeImg

    }catch (error) {
        console.log(error)
    }
}

function firstLetterUppercas(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
