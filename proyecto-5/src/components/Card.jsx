import { useState, useEffect } from 'react';

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        // Hacemos la solicitud a la URL específica del Pokémon
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => setPokemonData(data))
            .catch(error => console.error('Error fetching Pokémon data:', error));
    }, [pokemon.url]);

    if (!pokemonData) {
        return <div>Loading...</div>; // Mostrar mientras se cargan los datos
    }

    return (
        <div className="card">
            <h2>{pokemon.name} (ID: {pokemonData.id})</h2>
            {/* Accedemos a la imagen del sprite frontal del Pokémon */}
            <img src={pokemonData.sprites?.front_default} alt={pokemon.name} />
        </div>
    );
};

export default PokemonCard;
