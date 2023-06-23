import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../actions/fetchData";
import { GenreContext } from "../context/GenreContext";
import { PropagateLoader } from "react-spinners";
import {
  StyledHero,
  HeroTitle,
  GamesContainer,
  LoadingContainer,
  StyledLink,
  hoverStyles1
} from "../styles/Styles";

import GameCardWrapper from "./GameCardWrapper";

const HeroWrapper = () => {
  const { selectedGenre, searchTitle } = useContext(GenreContext);
  const [gamesList, setGamesList] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await fetchData();
        setGamesList(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const filterGames = () => {
      if (!selectedGenre && !searchTitle) {
        setFilteredGames(gamesList);
      } else if (!selectedGenre && searchTitle) {
        const filteredByTitle = gamesList.filter(game =>
          game.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setFilteredGames(filteredByTitle);
      } else if (selectedGenre && !searchTitle) {
        const filteredByGenre = gamesList.filter(
          game => game.genre === selectedGenre
        );
        setFilteredGames(filteredByGenre);
      } else {
        const filteredByGenreAndTitle = gamesList.filter(
          game =>
            game.genre === selectedGenre &&
            game.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setFilteredGames(filteredByGenreAndTitle);
      }
    };

    filterGames();
  }, [selectedGenre, gamesList, searchTitle]);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <StyledHero>
      <HeroTitle>Jogos:</HeroTitle>
      {error ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: ".5rem" }}>
          <p>{error}</p>
          <StyledLink onClick={reloadPage}
            $backgroundcolor={"#b22020"}
            $border={"2px solid #b22020"}
            $borderradius={"4px"}
            $color={"#000"}
            $width={`@media screen and (max-width: 940px) { 95vw }`}
            $padding={"1rem .5rem"}
            $alignitens={"center"}
            $transition={".4s"}
            $textalign={"center"}
            $fontweight={"bold"}
            $hover={hoverStyles1}
          >Recarregar Página</StyledLink>
        </div>
      ) : (
        <>
          {filteredGames.length === 0 ? (
            <LoadingContainer>
              <PropagateLoader color="#f6f3f3" />
            </LoadingContainer>
          ) : (
            <GamesContainer>
              {filteredGames.map(game => (
                <GameCardWrapper key={game.id} game={game} />
              ))}
            </GamesContainer>
          )}
        </>
      )}
    </StyledHero>
  );
};

export default HeroWrapper;