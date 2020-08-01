//  This is the main IIFE function containing all data //

var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';  //URL to API goes here
  var banner = document.querySelector('p');

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

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

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

// --------------  add additional characters to array here -----------------
