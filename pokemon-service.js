    
 baseUrl = 'https://pokeapi.co/api/v2/pokemon';
 async function fetchData(nameOrId) {
    const response = await fetch(`${this.baseUrl}/${nameOrId}`);
    if (!response.ok) {
      throw new Error('Pokémon not found');
    }
    const data = await response.json();
    return {
      name: data.name,
      types: data.types.map(typeInfo => typeInfo.type.name),
      image: data.sprites.front_default,
    };
  }
 
  module.exports = {fetchData,baseUrl};