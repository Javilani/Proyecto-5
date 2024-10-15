import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from '../components/PokemonList.jsx';  // Página de inicio
import BuscarPokemon from '../components/BuscarPokemon.jsx';  // Página de búsqueda
import Navbar from '../components/Navbar.jsx';  // Tu Navbar
import Footer from '../components/Footer.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/inicio" element={<PokemonList />} />
        <Route path="/buscar" element={<BuscarPokemon />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;