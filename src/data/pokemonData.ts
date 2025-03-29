
// This is a sample of Pokémon data
// In a real application, this would include all Pokémon

export interface PokemonBase {
  id: number;
  name: string;
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
  types: string[];
  imageUrl: string;
}

export const pokemonData: PokemonBase[] = [
  {
    id: 1,
    name: "Bulbasaur",
    baseAttack: 118,
    baseDefense: 111,
    baseStamina: 128,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    id: 2,
    name: "Ivysaur",
    baseAttack: 151,
    baseDefense: 143,
    baseStamina: 155,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    id: 3,
    name: "Venusaur",
    baseAttack: 198,
    baseDefense: 189,
    baseStamina: 190,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id: 4,
    name: "Charmander",
    baseAttack: 116,
    baseDefense: 93,
    baseStamina: 118,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id: 5,
    name: "Charmeleon",
    baseAttack: 158,
    baseDefense: 126,
    baseStamina: 151,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    id: 6,
    name: "Charizard",
    baseAttack: 223,
    baseDefense: 173,
    baseStamina: 186,
    types: ["Fire", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    id: 7,
    name: "Squirtle",
    baseAttack: 94,
    baseDefense: 121,
    baseStamina: 127,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    id: 8,
    name: "Wartortle",
    baseAttack: 126,
    baseDefense: 155,
    baseStamina: 153,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    id: 9,
    name: "Blastoise",
    baseAttack: 171,
    baseDefense: 207,
    baseStamina: 188,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    id: 25,
    name: "Pikachu",
    baseAttack: 112,
    baseDefense: 96,
    baseStamina: 111,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    id: 26,
    name: "Raichu",
    baseAttack: 193,
    baseDefense: 151,
    baseStamina: 155,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    id: 133,
    name: "Eevee",
    baseAttack: 104,
    baseDefense: 114,
    baseStamina: 146,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    id: 134,
    name: "Vaporeon",
    baseAttack: 205,
    baseDefense: 161,
    baseStamina: 277,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
    id: 135,
    name: "Jolteon",
    baseAttack: 232,
    baseDefense: 182,
    baseStamina: 163,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
    id: 136,
    name: "Flareon",
    baseAttack: 246,
    baseDefense: 179,
    baseStamina: 163,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
    id: 150,
    name: "Mewtwo",
    baseAttack: 300,
    baseDefense: 182,
    baseStamina: 214,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    id: 151,
    name: "Mew",
    baseAttack: 210,
    baseDefense: 210,
    baseStamina: 225,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
];
