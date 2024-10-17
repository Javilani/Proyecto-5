import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const PokemonDetail = () => {
    const { searchTerm } = useParams(); // Obtener el término de búsqueda de la URL

    // Aquí puedes realizar la lógica para buscar el Pokémon por ID o nombre
    // Por ejemplo, puedes buscar en un array de Pokémon o hacer una llamada a una API

    return (
        <div>
            <h1>Detalles de Pokémon: {searchTerm}</h1>
            <Card />
        </div>
    );
};

export default PokemonDetail;
