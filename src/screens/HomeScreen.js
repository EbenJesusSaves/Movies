import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { BackgroundColor, HeaderText } from "../../utils/BasicStyles";
import { Swipper } from "../../utils/Swiper";

export const HomeScreen = ({ movies = {} }) => {
  const {
    name = "some Dommy Name ",
    Image = "Some Dommy Image ",
    Genry = "Action",
    shortInfo = "Jesus Saves ",
  } = movies;

  return (
    <BackgroundColor>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderText>Trending Now</HeaderText>
        <Swipper />
      </SafeAreaView>
    </BackgroundColor>
  );
};
