import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList.jsx';
import PokemonDetail from '../components/PokemonDetail.jsx';
import Navbar from '../components/Navbar.jsx';  
import Footer from '../components/Footer.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/inicio" element={<PokemonList />} />
        <Route path="/buscar/:searchTerm" element={<PokemonDetail />} /> {/* Ruta para mostrar detalles del Pokémon */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;