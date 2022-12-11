import { AntDesign } from "@expo/vector-icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { FavouratesContext } from "../../contexts/FavouratesContextProvider";

const FavourateButton = styled.TouchableOpacity`
  position: absolute;

  top: 10px;
  right: 10px;
  z-index: 1;
`;

export const FavouratesComponent = ({ movie }) => {
  const { addFavorites, removeFavorites, favorites } =
    useContext(FavouratesContext);

  const isAlreadyFavorite = favorites.find((item) => item.id === movie.id);
  return (
    <FavourateButton
      onPress={() =>
        !isAlreadyFavorite ? addFavorites(movie) : removeFavorites(movie)
      }
    >
      <AntDesign
        name={isAlreadyFavorite ? "heart" : "hearto"}
        color={isAlreadyFavorite ? "#ff314e" : "#dfe5f5"}
        size={20}
      />
    </FavourateButton>
  );
};
