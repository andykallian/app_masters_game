import React, { createContext, useState } from 'react';

export const GenreContext = createContext({selectedGenre: '', handleGenreChange: () => {}});

export const GenreProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  }

  return (
    <GenreContext.Provider value={{ selectedGenre, handleGenreChange, setSearchTitle, searchTitle  }}>
      {children}
    </GenreContext.Provider>
  )
}
