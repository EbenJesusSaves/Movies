import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const FavouratesContext = createContext();

export const FavouratesContextProvider = ({ children }) => {
  const id = "2308dhis";

  const [favorites, setFavorites] = useState([]);

  const addFavorites = (movies) => {
    setFavorites([...favorites, movies]);
  };

  const removeFavorites = (movies) => {
    const newFavorites = favorites.filter((data) => data.id !== movies.id);
    setFavorites(newFavorites);
  };

  const saveFavoritesStorage = async (moviesValue) => {
    try {
      const receivedData = JSON.stringify(moviesValue);
      await AsyncStorage.setItem(`@movies`, receivedData);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavoritesStorage = async () => {
    try {
      const receivedData = await AsyncStorage.getItem(`@movies`);

      if (receivedData != null) {
        const pursedData = JSON.parse(receivedData);
        setFavorites(pursedData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (id && favorites.length) {
      saveFavoritesStorage(favorites);
    }
  }, [favorites]);

  useEffect(() => {
    getFavoritesStorage();
  }, []);
  // console.log(favorites);

  return (
    <FavouratesContext.Provider
      value={{ addFavorites, removeFavorites, favorites }}
    >
      {children}
    </FavouratesContext.Provider>
  );
};
