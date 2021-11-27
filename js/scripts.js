let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] },
    { name: 'Squirtle', height: 0.5, types: ['water'] },
    { name: 'Caterpie', height: 0.3, types: ['bug'] }
];

//Highlighting Pokémons taller than 0.6
function myList(pokemon) {
    document.write(pokemon.name + " " + "(height: " + pokemon.height + ")");
    if (pokemon.height > 0.6) {
        document.write(" Wow, that\'s big!");
    }
    document.write('<br>');

}
pokemonList.forEach(myList);