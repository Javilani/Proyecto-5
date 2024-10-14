import { useEffect, useState } from 'react';
import { getPokemon } from '../services/apiPokemon';
import PokemonCard from './Card';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemon();
                setPokemons(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;