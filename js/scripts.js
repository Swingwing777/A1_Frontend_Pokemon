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
    type: [' Ghost', 'Poison'],
    ability: [' Levitate'],
    height: 1.5,
    healthPoint: 60
  }
];

function printArrayDetails(list) {
  for (var i = 0; i < list.length; i++ ) {
    '<div class="grid1">'
    if (list[i].height >= 3.0) {
      document.write('<p class="grid1__item">' + '<strong class="strong1">' + (list[i].name) + '</strong>' + '<br>' + 'Abilities: ' + (list[i].ability) + '<br>' + 'Height: '+ (list[i].height) + '<strong>\n - That\'s really huge!</strong>' + '</p>');
    }
      else if (list[i].height <= 0.49) {
      document.write('<p class="grid1__item">' + '<strong class="strong1">' + (list[i].name) + '</strong>' + '<br>' + 'Abilities: ' + (list[i].ability) + '<br>' + 'Height: '+ (list[i].height) + '<strong>\n - That\'s tiny!</strong>' + '</p>');
    }
      else {
      document.write('<p class="grid1__item">' + '<strong class="strong1">' + (list[i].name) + '</strong>' + '<br>' + 'Abilities: ' + (list[i].ability) + '<br>' + 'Height: '+ (list[i].height) + '</p>');
    }
    '</div>'
  }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);
