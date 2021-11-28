let pokemonRepository = (function () {

    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, types: ['fire'] },
        { name: 'Squirtle', height: 0.5, types: ['water'] },
        { name: 'Caterpie', height: 0.3, types: ['bug'] }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();

//Highlighting Pokémons taller than 0.6
function printPokemon(pokemon) {
    document.write(pokemon.name + " " + "(height: " + pokemon.height + ")");
    if (pokemon.height > 0.6) {
        document.write(" Wow, that\'s big!");
    }
    document.write('<br>');

}
pokemonRepository.getAll().forEach(printPokemon);