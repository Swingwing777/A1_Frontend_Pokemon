//  This is the main IIFE function containing all data //

var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  var banner = document.querySelector('p');

  // essential functions to access data within IIFE
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // add Pokemon buttons
  function addListItem(pokemon) {
    var heroList = document.querySelector('.pokemon-list')
    var heroItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonButton')
    heroItem.appendChild(button);
    heroList.appendChild(heroItem);
    buttonListen(button, pokemon);
  }

  function showLoadingMessage(banner) {
    banner.classList.remove('hideDataLoading');
  }

  function hideLoadingMessage(banner) {
    banner.classList.add('hideDataLoading');
  }

  //fecth primary pokemmon data (name, character url)
  function loadList() {
    showLoadingMessage(banner);
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        hideLoadingMessage(banner);
      });
    }).catch(function (e) {
      hideLoadingMessage(banner);
      console.error(e);
    })
  }

  //fetch additional pokemon details
  function loadDetails(item) {
    showLoadingMessage(banner);
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      // Add details to each Pokemon (aka item)
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.abilities = details.abilities;
      item.healthPoint = details.stats[0].base_stat;
      hideLoadingMessage(banner);
    }).catch(function (e) {
      hideLoadingMessage(banner);
      console.error(e);
    });
  }

  // to show additional Pokemon details on click
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  //creates event listener for each button
  function buttonListen(button, pokemon) {
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  // --- Modal Functions IIFE within Pokemon Repository --------------

(function () {
  var modalContainer = document.querySelector('#modal-container');
  var dialogPromiseReject;      // Variable declared but undefined

  function showModal(title, text) {
    var modalContainer = document.querySelector('#modal-container');

    // Clear the template modal of content, then rebuild as desired
    modalContainer.innerHTML = '';

    //create modal
    var modal = document.createElement('div');
    modal.classList.add('modal');

    //create title element
    var titleElement = document.createElement('h1');
    titleElement.innerText = title;

    //create content element
    var contentElement = document.createElement('p');
    contentElement.innerText = text;

    //create close button
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  function showDialog(title, text) {
    showModal(title, text);

    var modal = modalContainer.querySelector('.modal');

    //create confirm button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';

    //create cancel button
    var cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';

    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

    //focus confirmButton so that user can simply press Enter
    confirmButton.focus();

    return new Promise((resolve, reject) => {
      cancelButton.addEventListener('click', hideModal);
      confirmButton.addEventListener('click', () => {
        dialogPromiseReject = null;  //var given null value. Resets.
        hideModal();
        resolve();
      });

      // This can be used to reject from other functions, such as the close button
      dialogPromiseReject = reject;
    });
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal Title', 'This is the modal content' );
  });

  document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm Action', 'Are you sure this is a good idea?').then(function() {
      alert('Confirmed');
    }, () => {
      alert('Not confirmed');
    });
  });

  window.addEventListener('keydown', (e) => {   //arrow function – Esc to close modal
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Click only outside modal on modal overlay will close modal
    var target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

})();   // -------------- End of modal IIFE  --------------------

  // Return statement of pokemonRepository IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();     // ----------------- END OF IIFE -----------------

// ------------- Functions external to IIFE -----------------------
pokemonRepository.loadList().then(function() {            // this calls the data from API and then calls getAll
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){   //  getAll returns Pokemon, followed by forEach loop, add to pokemonList array
    pokemonRepository.addListItem(pokemon);
  });
});

function objectEquals(arr1){
//template array of keys
let arr2 = ["name", "type", "ability", "height", "healthPoint"];
  //check if both are arrays and have equal length
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length){
    let sortedArr1 = arr1.sort()
    let sortedArr2 = arr2.sort()
    return sortedArr1.every((val, index) => val == sortedArr2[index]);
  } else{
    return "cannot compare these";
  }
}

function checkChar(charDetail) {          // adds to pokemonList2.
  var charKeys = Object.keys(charDetail);
  if (objectEquals(charKeys)) {
    pokemonRepository.add(charDetail);
  } else {
    alert('Check List "New Character" input format');
    console.log(charkeys);
  }
}

// -----------------Experiment --------------
