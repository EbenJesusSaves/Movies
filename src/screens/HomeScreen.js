import React from "react";
import styled from "styled-components";
import { SafeAreaView, Text, View } from "react-native";
import {
  BackgroundColor,
  HeaderText,
  HeaderTextHot,
} from "../../utils/BasicStyles";

import { MoviesDetailsNav } from "../navigations/MoviesDetailsNav";

export const HomeScreen = ({ movies = {} }) => {
  const {
    name = "some Dommy Name ",
    Image = "Some Dommy Image ",
    Genry = "Action",
    shortInfo = "Jesus Saves ",
  } = movies;

  const Container = styled.View`
    // flex: 0.4;
    background-color: red;
  `;

  return (
    <BackgroundColor>
      <MoviesDetailsNav />
    </BackgroundColor>
  );
};
