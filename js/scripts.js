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

     function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
        
    }

        return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

(function () {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector('#email');
    let passwordInput = document.querySelector('#password');

function showErrorMessage (input, message) {
    let container = input.parentElement;

    //Remove existing error
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }

    //Error if the message isn't empty
    if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
    }
}

function validateEmail() {
    let value = emailInput.value;

    if (!value) {
        showErrorMessage (emailInput, 'Email is a required field.');
        return false;
    }

    if (value.indexOf('@') === -1) {
        showErrorMessage (emailInput, 'You must enter a valid email address.');
        return false;
    }

    showErrorMessage (emailInput, null);
    return true;
}

function validatePassword() {
    let value = passwordInput.value;
    
    if (!value) {
        showErrorMessage (passwordInput, 'Password is a required field.');
        return false;
    }

    if (value.length < 8) {
        showErrorMessage (passwordInput, 'The password needs to be at least 8 characters long.');
        return false;
    }

    showErrorMessage(passwordInput, null);
    return true;
}

function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        alert('Success!');
    }
});

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
})();