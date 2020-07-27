var pokemonRepository = (function () {
  var pokemonList1 = [
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
    }
  ];

  var pokemonList2 = [

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

  function add1(pokemon) {
    pokemonList1.push(pokemon);
  }

  function add2(pokemon) {
    pokemonList2.push(pokemon);
  }

  function getAll1() {
    return pokemonList1;
  }

  function getAll2() {
    return pokemonList2;
  }

  return {
    add1: add1,
    getAll1: getAll1,
    add2: add2,
    getAll2: getAll2,
  };
})();

function printArrayDetails(list) {
  list.forEach(function(pokemon) {
    '<div class="grid1">'
    if (pokemon.height >= 3.0) {
      document.write('<p class="grid1__item" id="byAttributeChar">' + '<strong class="strong1">' + (pokemon.name) + '</strong>' + '<br>'
       + 'Type: ' + (pokemon.type) + '<br>' + 'Abilities: ' + (pokemon.ability) + '<br>'
        + 'Height: '+ (pokemon.height) + '<strong>\n - That\'s really huge!</strong>' + '<br>'
         + 'Health Points: ' + (pokemon.healthPoint) + '</p>');
    }
      else if (pokemon.height <= 0.49) {
      document.write('<p class="grid1__item" id="byAttributeChar">' + '<strong class="strong1">' + (pokemon.name) + '</strong>' + '<br>'
       + 'Type: ' + (pokemon.type) + '<br>' + 'Abilities: ' + (pokemon.ability) + '<br>'
        + 'Height: '+ (pokemon.height) + '<strong>\n - That\'s tiny!</strong>' + '<br>'
         + 'Health Points: ' + (pokemon.healthPoint) + '</p>');
    }
      else {
      document.write('<p class="grid1__item" id="byAttributeChar">' + '<strong class="strong1">' + (pokemon.name) + '</strong>' + '<br>'
       + 'Type: ' + (pokemon.type) + '<br>' + 'Abilities: ' + (pokemon.ability) + '<br>'
        + 'Height: '+ (pokemon.height) + '<br>' + 'Health Points: ' + (pokemon.healthPoint) + '</p>');
    }
    '</div>'
  })
}

// two dffferent methods of validation for new characters tried

function checkChar1(charDetail) {            // add to pokemonList1 - Too tolerant as only alerts if charDetail is not an object in any way or form.
  var charKeys1 =Object.keys(charDetail);
  if (typeof charDetail === "object") {
    pokemonRepository.add1(charDetail);
  } else {
    alert('Check List 1 "New Character" input format');
    console.log(charKeys1);
  }
}

function checkChar2(charDetail) {            // adds to pokemonList2 - too strong as flags any input tried as false.
  var charKeys2 = Object.keys(charDetail);
  if (charKeys2 === ("name")) {
    pokemonRepository.add1(charDetail);
  } else {
    alert('Check List 2 "New Character" input format');
    console.log(charKeys2);
  }
}

/* // filter character by attributes:

 function filterChar(key) {
  click

}

function filteResult() {
  document.getElementById("byAttributeChar").innerHTML = pokemonRepository.filter(filterCHar);
}

*/

/* add additional characters here:
checkchar1 (and 2) replaces pokemonRepository.add1 (and .add2) to allow format check */

checkChar1({name: 'Hypno' + '<span class = "newCharacter">' + ' - New Pokémon!' + '</span>',
 type: ['Psychic'], ability: [' Insomnia',' Inner-Focus',' Forewarn'], height: 1.6, healthPoint: 85 });

checkChar2({name: 'Moltres' + '<span class = "newCharacter">' + ' - New Pokémon!' + '</span>',
 type: ['Fire', ' Flying'], ability: [' Pressure',' Flame-body'], height: 2, healthPoint: 90 });

// create website below:

document.write('<h2>' + 'First Generation Pokemons' + '</h2>');

printArrayDetails(pokemonRepository.getAll1());

document.write('<h2>' + 'Second Generation Pokemons' + '</h2>');

printArrayDetails(pokemonRepository.getAll2());
