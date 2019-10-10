const starWarsAPI = "https://swapi.co/api/";
const pokemonAPI = "https://pokeapi.co/api/v2/";

const empireStrikesBack = starWarsAPI + "films/2/";
const pokedex = pokemonAPI + "pokedex/";

window.fetch(empireStrikesBack).then(function(response) {
    return response.json();
})

const dataHandler = data => {
    const firstCharacter = data.characters[0];
    console.log(firstCharacter);
    console.log("Yes, this is happening");
}
const div = document.createElement("div");
document.body.appendChild(div);
// div.textContent(empireStrikesBackCharacters);






/* Mob Coded By:
Randy Trindad (AKA Rico Suave)
Santiago Alberto (T, no context)
Ybrayym Abamov (Mr. Camel)
Mike A (The Jobfather)
*/

