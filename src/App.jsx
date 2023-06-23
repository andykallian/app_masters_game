import { Routes, Route, Outlet } from 'react-router-dom'
import { GenreProvider } from './context/GenreContext';

import './index.css'

import NavbarWrapper from './components/NavbarWrapper'
import HeroWrapper from './components/HeroWrapper.jsx'
import Game from './pages/Game.jsx'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <GenreProvider>
        <NavbarWrapper />
        <Routes>
          <Route path="/app_masters_game/" element={<HeroWrapper />} />
          <Route path="/app_masters_game/game/:id" element={<Game />} />
          <Route path="/app_masters_game/search" element={<Search />} />
        </Routes>
        <Outlet />
      </GenreProvider>
    </div>
  );
}

export default App;