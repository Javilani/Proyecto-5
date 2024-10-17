// import { useParams } from 'react-router-dom';
// import { Card } from 'react-bootstrap';

// const PokemonDetail = () => {
//     const { searchTerm } = useParams(); // Obtener el término de búsqueda de la URL

//     // Aquí puedes realizar la lógica para buscar el Pokémon por ID o nombre
//     // Por ejemplo, puedes buscar en un array de Pokémon o hacer una llamada a una API

//     return (
//         <div>
//             <h1>Detalles de Pokémon: {searchTerm}</h1>
//             <Card />
//         </div>
//     );
// };

// export default PokemonDetail;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
    const { searchTerm } = useParams(); // Obtener el término de búsqueda de la URL
    const [pokemonData, setPokemonData] = useState(null); // Estado para los datos del Pokémon
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        // Convertir el searchTerm a minúsculas para la búsqueda
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener el Pokémon');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            } finally {
                setLoading(false); // Cambiar el estado de carga
            }
        };

        fetchPokemon(); // Llamar a la función
    }, [searchTerm]); // Ejecutar cuando searchTerm cambie

    if (loading) {
        return <div>Loading...</div>; // Mostrar mientras se cargan los datos
    }

    if (!pokemonData) {
        return <h1>Pokémon no encontrado</h1>; // Mensaje si no se encuentra el Pokémon
    }

    const height = (pokemonData.height * 0.1).toFixed(1); // Convertir altura a metros
    const weight = (pokemonData.weight * 0.1).toFixed(1); // Convertir peso a kilogramos
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='outsideCard'>
            <div className="cardSearch">
                <h2 className='nameCardSearch textCardSearch'>{pokemonData.id}. {capitalizeFirstLetter(pokemonData.name)} </h2>
                <img src={pokemonData.sprites?.front_default} alt={pokemonData.name} className='imgSearch'/>
                <div className='infoCardSearch textCardSearch'>
                <p> Altura: {height} mts</p>
                <p> Peso: {weight} kg</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
