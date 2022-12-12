import React, { useState, useEffect, useContext, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [genre, setGenre] = useState("");
  const [pagination, setPagination] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");
  const [returnSearchMovies, setSearchReturnedMovies] = useState("");

  const api = `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&genre=${genre}&limit=50&page=${pagination}`;

  const apiForSeach = `https://yts.mx/api/v2/list_movies.json?sort_by1=seeds&g&limit=50&page=${pagination}&query_term=${searchMovie}`;

  const apiForJenre = `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&genre=${genre}&limit=30&page=${pagination}`;

  const [dataReturned, setDataReturned] = useState("");
  const [returnMovies, setReturnedMovies] = useState("");
  const [displayPage, setDisplayPage] = useState("");
  const [forGenre, SetForGenre] = useState("");

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setDataReturned(data.data);
    })();
  }, [api]);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setReturnedMovies(data.data.movies);
    })();
  }, [api]);

  useEffect(() => {
    (async function () {
      let data = await fetch(apiForSeach).then((res) => res.json());
      setSearchReturnedMovies(data.data.movies);
    })();
  }, [apiForSeach]);

  useEffect(() => {
    (async function () {
      let data = await fetch(apiForJenre).then((res) => res.json());
      SetForGenre([...forGenre, ...data.data.movies]);
    })();
  }, [api]);

  return (
    <MoviesContext.Provider
      value={{
        forGenre,
        genre,
        setGenre,
        searchMovie,
        dataReturned,
        returnMovies,
        setDataReturned,
        setSearchMovie,
        setPagination,
        pagination,
        returnSearchMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
