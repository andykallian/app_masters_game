import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GameCardWrapper from '../components/GameCardWrapper';

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);


    const searchUrl = import.meta.env.VITE_SEARCH
    const apiKey = import.meta.env.VITE_API_KEY

  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setGenreOptions([...new Set(data.results.map(movie => movie.genre))]); // pega os generos únicos
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL)
  }, [query]);

  return (
    <div className="container">
      <div>
        <label htmlFor="genre-select">Filtrar por gênero:</label>
        <select id="genre-select" onChange={handleGenreChange}>
          <option value="">Todos</option>
          {genreOptions.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando....</p>}
        {movies
          .filter(movie => selectedGenre ? movie.genre === selectedGenre : true) 
          .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
          .map(movie => <GameCardWrapper key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;

