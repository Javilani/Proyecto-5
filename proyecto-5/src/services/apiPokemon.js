import axios from 'axios';
const API_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'

export const getPokemon = async() => {
    try {
        const { data } = await axios.get(API_URL);
        if (!data) throw new Error('Error al capturar los datos del pokemon');
        return data;
    } catch (error) {
        throw new Error('Error al capturar el pokemon', error);
    }
};