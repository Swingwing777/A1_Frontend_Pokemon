//  This is the main IIFE function containing all data //

var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  //URL to API goes here
  var banner = document.querySelector('p');
  var modalContainer = document.querySelector('#modal-container');
  var dialogPromiseReject;      // Variable declared, but undefined value.  This can be set later, by showDialog

  // essential access functions to data within IIFE

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    var heroList = document.querySelector('.pokemon-list')  // selects parent <ul> element
    var heroItem = document.createElement('li');            // creates new 'virtual' <li> list item
    var button = document.createElement('button');          // creates new 'virtual' button
    button.innerText = pokemon.name;                        // adds pokemon name value to each button.
    button.classList.add('pokemonButton')                   // class added to newly-created button
    heroItem.appendChild(button);                           // button appended to newly-created <li> element
    heroList.appendChild(heroItem);                         // newly-created <li> added to parent <ul> list
    buttonListen(button, pokemon);                          // click listen function called on new button
  }

  function showLoadingMessage(banner) {
    banner.classList.remove('hideDataLoading');
  }

  function hideLoadingMessage(banner) {
    banner.classList.add('hideDataLoading');
  }

  function loadList() {                                // fetch function within function loadList
    showLoadingMessage(banner);
    return fetch(apiUrl).then(function (response) {    // to fetch list of pokemons
      return response.json();                          // a promise object is returned
    }).then(function (json) {
      json.results.forEach(function (item) {           // usable pokemon data is parsed from the initial returned object
        var pokemon = {                                // Only name and URL used for each Pokemon (aka item)
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        hideLoadingMessage(banner);                                 // this calls the add(pokemon) function to push the new pokemon to the ned of the pokemonList
      });
    }).catch(function (e) {                            // action in event of error
      hideLoadingMessage(banner);
      console.error(e);
    })
  }

  function loadDetails(item) {                          // separate fetch to call for greater detail for selected Pokemon (aka items)
    showLoadingMessage(banner);
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {        // fetch function within function loadDetails
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item             // Additonal api details added to each Pokemon (aka item) object
      item.imageUrl = details.sprites.front_default;    // 'item' is my Pokemon whereas 'details' is value from API.
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

  function showDetails(pokemon) {                       // this function to show additional Pokemon details on click
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function buttonListen(button, pokemon) {
    button.addEventListener('click', function (event) {      //creates event listener for each button
      showDetails(pokemon);
    });
  }

  // --- Modal Functions go here --------------

  function showModal(title, text) {       //This is an IIFE
    var modalContainer = document.querySelector('#modal-container');

    // Clear the template modal of content, then rebuild as desired

    modalContainer.innerHTML = '';  //clears content for fresh start

    var modal = document.createElement('div'); // creates new modal
    modal.classList.add('modal');

    var closeButtonElement = document.createElement('button');  //new Close button
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);  // to use Close Button

    var titleElement = document.createElement('h1');   // new Title element
    titleElement.innerText = title;

    var contentElement = document.createElement('p');  // new Content element
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);  // add close button to modal
    modal.appendChild(titleElement);        // add title to modal
    modal.appendChild(contentElement);      // add content to modal
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

    //create a confirm and cancel button
    var confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';

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

    // This can be used to reject from other functions
    dialogPromiseReject = reject;
  });
}

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal Title', 'This is the modal content' );
  });

  document.querySelector('#show-dialog').addEventListener('click', () => {
    showDialog('Confirm Action', 'Are you sure this is a good idea?').then(function() {
      alert('confirmed');
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
    var target = e.target;           // e is shorthand var for an event. eg keydown
    if (target === modalContainer) {
      hideModal();
     }
  });

  // ------ Return statement of IIFE is here

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
