import React, { createContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

const key = "94d2e8dd31717af3b8658f674d848af5";
const URL = "https://api.themoviedb.org/3/";
const tryApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;

const api =
  "https://api.themoviedb.org/3/movie/550?api_key=94d2e8dd31717af3b8658f674d848af5";

export const MovieDbContext = createContext();

export const MovieDbContextProvider = ({ children }) => {
  const [dataReceived, setDataReceived] = useState(null);

  useEffect(() => {
    (async function () {
      let data = await fetch(tryApi);

      const movies = await data.json();
      setDataReceived(movies.results);
    })();
  }, [tryApi]);

  //   console.log("hi");

  return (
    <MovieDbContext.Provider value={{ dataReceived }}>
      {children}
    </MovieDbContext.Provider>
  );
};
