var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: 'Bulbasaur',
      type: [' Grass', ' Poison'],
      ability: [' Chlorophyll',' Overgrow'],
      height: 0.7,
      healthPoint: 45
    },

    {
      name: 'Fearow',
      type: [' Flying', ' Normal'],
      ability: [' Keen-eye',' Sniper'],
      height: 1.2,
      healthPoint: 65
    },

    {
      name: 'Charizard',
      type: [' Flying', ' Fire'],
      ability: [' Blaze', ' Solar-power'],
      height: 1.7,
      healthPoint: 78
    },

    {
      name: 'Arbok',
      type: [' Poison'],
      ability: [' Intimidate', ' Shed-skin', ' Unnerve'],
      height: 3.5,
      healthPoint: 60
    },

    {
      name: 'Raticate',
      type: [' Normal'],
      ability: [' Run-away', ' Hustle', ' Guts'],
      height: 0.7,
      healthPoint: 55
    },

    {
      name: 'Raichu',
      type: [' Electric'],
      ability: [' Static', ' Lightningrod'],
      height: 0.8,
      healthPoint: 60
    },

    {
      name: 'Sandslash',
      type: [' Ground'],
      ability: [' Sand-veil', ' Sand-rush'],
      height: 1,
      healthPoint: 75
    },

    {
      name: 'Parasect',
      type: [' Grass', ' Bug'],
      ability: [' Damp', ' Effect-spore', ' Dry-skin'],
      height: 1,
      healthPoint: 60
    },

    {
      name: 'Butterfree',
      type: [' Bug', ' Poison'],
      ability: [' Swarm',' Sniper'],
      height: 1,
      healthPoint: 65
    },

    {
      name: 'Pikachu',
      type: [' Electric'],
      ability: [' Static', ' Lighteningrod'],
      height: 0.4,
      healthPoint: 35
    },

    {
      name: 'Gloom',
      type: [' Grass', ' Poison'],
      ability: [' Stench', ' Chlorophyll'],
      height: 0.8,
      healthPoint: 60
    },

    {
      name: 'Nidoqueen',
      type: [' Ground', ' Poison'],
      ability: [' Poison-Point',' Rivalry', ' Shear-force'],
      height: 1.3,
      healthPoint: 90
    },

    {
      name: 'Oddish',
      type: [' Grass', ' Poison'],
      ability: [' Chlorphyll',' Run-away'],
      height: 0.5,
      healthPoint: 45
    },

    {
      name: 'Venemoth',
      type: [' Bug', ' Poison'],
      ability: [' Shield-dust', ' Tinted-lens', ' Wonder-skin'],
      height: 1.5,
      healthPoint: 70
    },

    {
      name: 'Dugtrio',
      type: [' Ground'],
      ability: [' Sand-veil', ' Arena-trap', ' Sand-force'],
      height: 0.7,
      healthPoint: 35
    },

    {
      name: 'Persian',
      type: [' Normal'],
      ability: [' Limber', ' Technician', ' Unnerve'],
      height: 1,
      healthPoint: 65
    },

    {
      name: 'Primeape',
      type: [' Fighting'],
      ability: [' Vital-spirit', ' Anger-point', ' Defiant'],
      height: 1,
      healthPoint: 65
    },

    {
      name: 'Golbat',
      type: [' Poison', ' Flying'],
      ability: [' Inner-focus', ' Infiltrator'],
      height: 1.6,
      healthPoint: 75
    },

    {
      name: 'Machamp',
      type: [' Fighting'],
      ability: [' Guts', ' Steadfast', ' No-guard'],
      height: 1.6,
      healthPoint: 90
    },

    {
      name: 'Magneton',
      type: [' Electric', ' Steel'],
      ability: [' Sturdy',' Magnet-pull', ' Analytic'],
      height: 1,
      healthPoint: 50
    },

    {
      name: 'Cloyster',
      type: [' Ice', ' Water'],
      ability: [' Shell-armor', ' Skill-link', ' Overcoat'],
      height: 1.5,
      healthPoint: 50
    },

    {
      name: 'Gengar',
      type: [' Ghost', ' Poison'],
      ability: [' Levitate'],
      height: 1.5,
      healthPoint: 60
    }
  ];

// essential access functions

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    var heroList = document.querySelector('.pokemon-list')  // selects parent list element
    var heroItem = document.createElement('li');   // creates new 'virtual' list item
    var button = document.createElement('button');  // creates new 'virtual' button
    button.innerText = pokemon.name;  // adds pokemon name value to each button.
    button.classList.add('pokemonButton')
    heroItem.appendChild(button);
    heroList.appendChild(heroItem);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

function printArrayDetails(list) {
  list.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  })
}

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

/* add additional characters here:
checkchar1 (and 2) replaces pokemonRepository.add1 (and .add2) to allow format check */

checkChar({name: 'Hypno', type: ['Psychic'], ability: [' Insomnia',' Inner-Focus',' Forewarn'], height: 1.6, healthPoint: 85 });

checkChar({name: 'Moltres', type: ['Fire', ' Flying'], ability: [' Pressure',' Flame-body'], height: 2, healthPoint: 90 });

// create website below:

printArrayDetails(pokemonRepository.getAll());
