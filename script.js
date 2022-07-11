/* Turn Off (Done)*/
function turnedOff(){
    document.getElementById('pokemon_name').innerHTML = '';
    document.getElementById('write_id').innerHTML = '';
    document.getElementById('id').innerHTML = '';
    document.getElementById('blue_circle').style = 'filter: brightness(50%);'
    document.getElementById('light_1').style = 'filter: brightness(50%);'
    document.getElementById('light_2').style = 'filter: brightness(50%);'
    document.getElementById('light_3').style = 'filter: brightness(50%);'
    document.getElementById('pokemon_img').remove();
}

/* Turn On */
function turnedOn(){
    document.getElementById('pokemon_name').innerHTML = 'Pokemon Name';
    document.getElementById('write_id').innerHTML = 'Touch here!';
    document.getElementById('id').innerHTML = 'ID: ';
    document.getElementById('blue_circle').style = 'filter: brightness(100%);'
    document.getElementById('light_1').style = 'filter: brightness(100%);'
    document.getElementById('light_2').style = 'filter: brightness(100%);'
    document.getElementById('light_3').style = 'filter: brightness(100%);'

    /* Create img tag */
    const img = document.createElement("img");
    img.id = 'pokemon_img'

    const display = document.getElementById('display')
    display.appendChild(img)
}

/* Connect to API (Right Text)*/
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