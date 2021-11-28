let pokemonRepository = (function () {

    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, types: ['fire'] },
        { name: 'Squirtle', height: 0.5, types: ['water'] },
        { name: 'Caterpie', height: 0.3, types: ['bug'] }
    ];

    function add(item) {
        pokemonList.push(item);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        button.addEventListener('click', showDetails (pokemon));
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

function printPokemon(pokemon) {
    pokemonRepository.addListItem(pokemon);
    }

pokemonRepository.getAll().forEach(printPokemon);

