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

// Hito 1 - Iteracion de los datos para su posterior renderizado 
const pokemonData = data.pokemon;

function renderPokemon(pokemon) {
  const typeLabel = pokemon.type[0]; 
  const typeLabelClass = typeLabel.toLowerCase(); 

  const markup = `
    <div class="pokemon-card ${typeLabelClass}">
      <div class="pokemon-card__type-label ${typeLabelClass}">
        <i class="pokemon-card__name-icon bx ${POKEMON_TYPES_ICONS[typeLabel]} ${typeLabelClass}"></i>
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

//hito 2 - Aplicacion de los filtros para la busqueda de pokemon 

// Función para aplicar los filtros
function applyFilters() {
  const typeFilter = document.getElementById('types').value;
  const weaknessFilter = document.getElementById('weaknesses').value;

  const filteredPokemon = pokemonData.filter(pokemon => {
    const hasType = !typeFilter || pokemon.type.includes(typeFilter);
    const hasWeakness = !weaknessFilter || pokemon.weaknesses.includes(weaknessFilter);

    return hasType && hasWeakness;
  });

  renderFilteredPokemon(filteredPokemon);
}

// Función para limpiar los filtros y mostrar todos los Pokémon nuevamente
function cleanFilters() {
  document.getElementById('types').value = '';
  document.getElementById('weaknesses').value = '';
  renderFilteredPokemon(pokemonData);
}

// Función para renderizar los Pokémon filtrados en el DOM
function renderFilteredPokemon(filteredPokemon) {
  const cardsContainer = document.querySelector('.cards');
  let pokemonCards = '';

  filteredPokemon.forEach(pokemon => {
    pokemonCards += renderPokemon(pokemon);
  });

  cardsContainer.innerHTML = pokemonCards;
}

// Agregar eventos a los botones de filtrado
document.querySelector('.filter.buttons button').addEventListener('click', applyFilters);
document.querySelector('.filter.buttons button.reverted').addEventListener('click', cleanFilters);

