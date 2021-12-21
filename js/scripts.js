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
        button.innerText = pokemon.name;
        button.classList.add('button-class');
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
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

     /*function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let height = pokemon.height * 10 + ' ' + 'cm';
            showModal(pokemon.name, pokemon.imageUrl, height);
        });
        
     }*/

    //let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');
    
    modalTitle.empty();
    modalBody.empty();

    //Add new modal content

    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);
    let heightElement = $("<p>" + "height: " + pokemon.height * 10 + " " + "cm" + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    }
    /*
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1')
    titleElement.innerText = title;

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    //Add Pokémon image to modal

    let imageContainer = document.querySelector('#image-container');
    let imageElement = document.createElement('img');
    imageElement.src = image;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
}

let dialogPromiseReject;

function hideModal() {
    modalContainer.classList.remove('is-visible');
        
    if (dialogPromiseReject) {
        dialogPromiseReject();
        dialogPromiseReject = null;
    }
}

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal ();
    }
});

modalContainer.addEventListener('click', function(e) {
    let target = e.target;
    if (target === modalContainer) {
        hideModal();
    }
});*/

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