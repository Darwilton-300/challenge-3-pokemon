import data from './data/pokemon.json' assert { type: 'json' };

const POKEMON_TYPES_ICONS = {
  fire: 'bxs-hot',
  flying: 'bx-wind',
  water: 'bx-water',
  grass: 'bx-leaf',
  bug: 'bxs-bug',
  electric: 'bxs-bolt',
  poison: 'bxs-skull',
  fighting: 'bx-error-circle',
  ground: 'bx-tree-alt',
  normal: 'bx-sun',
  psychic: 'bxs-magic-wand',
  ghost: 'bx-ghost'
}

console.log(data)

// Tu código aquí

const pokemonData = data.pokemon;


function renderPokemon(pokemon) {
  const typeLabel = pokemon.type[0]; 
  const typeLabelClass = typeLabel.toLowerCase(); 

  const markup = `
    <div class="pokemon-card ${typeLabelClass}">
      <div class="pokemon-card__type-label ${typeLabelClass}">
        <i class="pokemon-card__name-icon bx bx-${typeLabel.toLowerCase()} ${typeLabelClass}"></i>
        <span>${typeLabel.toLowerCase()}</span>
      </div>
      <div class="pokemon-card__image">
        <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
      </div>
      <div class="pokemon-card__name">
        <h4>${pokemon.name}</h4>
      </div>
      <p class="pokemon-card__eyebrow">#${pokemon.num}</p>
    </div>
  `;

  return markup;
}


const cardsContainer = document.querySelector('.cards');


let pokemonCards = '';
pokemonData.forEach(pokemon => {
  pokemonCards += renderPokemon(pokemon);
});


cardsContainer.innerHTML = pokemonCards;

