var pokemonList = [
  { name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    ability: ['Chlorophyll','Overgrow'],
    height: 0.7,
    healthPoint: 45
  },

  { name: 'Fearow',
    type: ['Flying', 'Normal'],
    ability: ['Keen-eye','Sniper'],
    height: 1.2,
    healthPoint: 65
  },

  { name: 'Charizard',
    type: ['Flying', 'Fire'],
    ability: ['Blaze', 'Solar-power'],
    height: 1.7,
    healthPoint: 78
  },

  { name: 'Arbok',
    type: ['Poison'],
    ability: ['Intimidate', 'Shed-skin', 'Unnerve'],
    height: 3.5,
    healthPoint: 60
  },

  { name: 'Raticate',
    type: ['Normal'],
    ability: ['Run-away', 'Hustle', 'Guts'],
    height: 0.7,
    healthPoint: 55
  },

  { name: 'Raichu',
    type: ['Electric'],
    ability: ['Static', 'Lightningrod'],
    height: 0.8,
    healthPoint: 60
  },

  { name: 'Sandslash',
    type: ['Ground'],
    ability: ['Sand-veil', 'Sand-rush'],
    height: 1,
    healthPoint: 75
  },

  { name: 'Parasect',
    type: ['Grass', 'Bug'],
    ability: ['Damp', 'Effect-spore', 'Dry-skin'],
    height: 1,
    healthPoint: 60
  },

  { name: 'Butterfree',
    type: ['Bug', 'Poison'],
    ability: ['Swarm','Sniper'],
    height: 1,
    healthPoint: 65
  },

  { name: 'Pikachu',
    type: ['Electric'],
    ability: ['Static', 'Lighteningrod'],
    height: 0.4,
    healthPoint: 35
  },

  { name: 'Gloom',
    type: ['Grass', 'Poison'],
    ability: ['Stench', 'Chlorophyll'],
    height: 0.8,
    healthPoint: 60
  }
];

console.log(pokemonList[5].height);

document.write(pokemonList[3].ability[2]);
