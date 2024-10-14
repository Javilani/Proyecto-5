export const CardPokemon = ({ pokemon }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img 
                    src={pokemon.sprites?.other?.['official-artwork']?.front_default || 'placeholder-image-url'} 
                    alt={`foto de ${pokemon.name}`}/>
            </div>
            <div className="card__body">
                <h2 className="card__title">{pokemon.name}</h2>
                <p>ID: {pokemon.id}</p>
            </div>
        </div>
    )
}