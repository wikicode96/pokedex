var state = false; /* If state False Pokedex is turn off */
var pokeId; /* The pokemon´s ID is stored here */

turnOff()

document.getElementById("power").addEventListener("click", turn);
document.getElementById("write_id").addEventListener("click", search);

/* Turn */
function turn(){
    if (state == false){
        turnOn()
        state = true
    }else{
        turnOff()
        state = false
    }
}

/* Search Pokemon */
function search(){
    if (state == true){

        pokeId = input()
        document.getElementById('id').innerHTML = 'ID: '+pokeId;

        document.getElementById("play").addEventListener("click", consultAPI);
    }
}

/* Input */
function input(){
    let id = prompt("What Pokémon are you looking for? Enter its ID here:");

    return id
}

/* Turn Off */
function turnOff(){
    document.getElementById('pokemon_name').innerHTML = '';
    document.getElementById('write_id').innerHTML = '';
    document.getElementById('stats').innerHTML = '';
    document.getElementById('blue_circle').style = 'filter: brightness(50%);'
    document.getElementById('light_1').style = 'filter: brightness(50%);'
    document.getElementById('light_2').style = 'filter: brightness(50%);'
    document.getElementById('light_3').style = 'filter: brightness(50%);'
    document.getElementById('id').innerHTML = '';
    document.getElementById('pokemon_img').remove();
}

/* Turn On */
function turnOn(){
    document.getElementById('pokemon_name').innerHTML = 'Pokemon Name';
    document.getElementById('write_id').innerHTML = 'Touch here!';
    document.getElementById('blue_circle').style = 'filter: brightness(100%);'
    document.getElementById('light_1').style = 'filter: brightness(100%);'
    document.getElementById('light_2').style = 'filter: brightness(100%);'
    document.getElementById('light_3').style = 'filter: brightness(100%);'
    document.getElementById('id').innerHTML = 'ID: ';
    if (pokeId != undefined){
        document.getElementById('id').innerHTML = 'ID: '+pokeId;
    }

    /* Create img tag */
    const img = document.createElement("img");
    img.id = 'pokemon_img'

    const display = document.getElementById('display')
    display.appendChild(img)
}

/* Connect to API */
async function consultAPI(){
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
        const result = await fetch(url);
        pokeJson = await result.json()

        /* Parse JSON */
        pokeName = pokeJson.name
        pokeName = firstLetterUppercas(pokeName);
        pokeImg = pokeJson.sprites.front_default
        stats = ""

        types = pokeJson.types
        types.forEach(type_extractor)
        function type_extractor(index){
            stats = stats+"Type: "+index.type.name+"<br/>"
        }

        base_stats = pokeJson.stats
        base_stats.forEach(stats_extractor)
        function stats_extractor(index){
            statLowerCase = index.stat.name+": "+index.base_stat
            stats = stats+"<br/>"+firstLetterUppercas(statLowerCase)
        }

        /* Poke Name */
        document.getElementById('pokemon_name').innerHTML = pokeName
        
        /* Poke Img */
        document.getElementById('pokemon_img').src = pokeImg

        /* Poke Stats (Type and Base Stat)*/
        document.getElementById('stats').innerHTML = stats

    }catch (error) {
        console.log(error)
    }
}

/* Letter Refactoring */
function firstLetterUppercas(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}