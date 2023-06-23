import React, { useContext, useEffect, useState } from 'react';
import { GiGameConsole } from 'react-icons/gi'
import { BiSearchAlt2 } from 'react-icons/bi'

import {
  StyledNavbar,
  H2,
  StyledLink,
  Form,
  Input,
  Select,
  Button,
  hoverStyles1,
  Container
} from '../styles/Styles.jsx';

import { fetchData } from '../actions/fetchData';
import { GenreContext } from '../context/GenreContext.jsx';

const NavbarWrapper = () => {
  const { selectedGenre, handleGenreChange, setSearchTitle} = useContext(GenreContext);

  const [search, setSearch] = useState('')
  const [genres, setGenres] = useState([])
  const [gamesList, setGamesList] = useState([])
  const [filteredGames, setFilteredGames] = useState([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await fetchData();
        const genres = Array.from(new Set(data.map(item => item.genre)));
        setGenres(genres);
        setGamesList(data);
        setFilteredGames(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) {
      setFilteredGames(gamesList);
    } else {
      const filtered = gamesList.filter(game => game.genre === selectedGenre);
      setFilteredGames(filtered);
    }
  }, [selectedGenre, gamesList]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchTitle(e.target.value);
  };

  return (
    <StyledNavbar>
      <H2>
        <StyledLink to='/app_masters_game/'>
          <GiGameConsole /> AppMasters Games
        </StyledLink>
      </H2>

      <Container $display={"flex"} $gap={".5rem"}>
        <Select value={selectedGenre} onChange={handleGenreChange}>
          <option value="">Todos os gêneros</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </Select>

        <Input
          type="text"
          placeholder='Busque um jogo'
          onChange={handleSearchChange}
          value={search}
        />  
      </Container>
    </StyledNavbar>
  );
};

export default NavbarWrapper;

