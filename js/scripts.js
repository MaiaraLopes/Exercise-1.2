let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
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
        
        button.dataset.target = '#exampleModalCenter';
        button.dataset.toggle = 'modal';
        button.innerText = pokemon.name;
        button.classList.add('btn-outline-info');
        button.classList.add('text-capitalize');
        button.classList.add('button-class');
        listItem.classList.add('list-group-item');
        button.addEventListener('click', function () {
            showDetails (pokemon);
        });    
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            }).catch(function (e) {
            console.error(e);
        });
    }

     function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
        
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
    
    modalTitle.empty();
    modalBody.empty();

    //Add new modal content

    let nameElement = $('<h1 class="text-capitalize">' + pokemon.name + '</h1>');
    let imageElementFront = $('<img class="modal-img" style="width:50%"' + ' alt="' + pokemon.name + ' front image"' + '>');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%"' + ' alt="' + pokemon.name + ' back image"' + '>');
    imageElementBack.attr("src", pokemon.imageUrlBack);
    let heightElement = $("<p>" + "Height: " + pokemon.height * 10 + " " + "cm" + "</p>");
    
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);

    }
    
return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});