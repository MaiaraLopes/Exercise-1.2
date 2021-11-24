let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, types: ['fire'] },
    { name: 'Squirtle', height: 0.5, types: ['water'] },
    { name: 'Caterpie', height: 0.3, types: ['bug'] }
];

for (let i = 0; i < pokemonList.length; i++) {
    //Highlighting Pokémons that are bigger than 0.6
    
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
    
    if (pokemonList[i].height > 0.6) {
        document.write(" Wow, that\'s big!");
    
    }
    document.write('<br>');
}