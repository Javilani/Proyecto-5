import { CardPokemon } from "./Card";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

export const PokemonList = () => {
    const { pokemons = [] } = useFetchPokemon();

    return (
        <>
            {
                pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                        <div key={pokemon.id}>
                            <CardPokemon pokemon={pokemon} />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> 
                )
            }
        </>
    );
}