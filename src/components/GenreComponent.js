import React, { useContext, useEffect, useState } from "react";

import { Container, MoviesView } from "../components/TrendingComponent";
import { FavouratesComponent } from "../components/FavouratesComponent";
import { MoviesContext } from "../../contexts/MoviesContext";
import { TouchableOpacity, View } from "react-native";
import {
  BackgroundColor,
  MovieCard,
  MovieCardCover,
} from "../../utils/BasicStyles";
import { FlashList } from "@shopify/flash-list";

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
const defaultImage =
  "https://thumbs.dreamstime.com/b/movie-film-company-logo-design-vector-template-movie-film-company-logo-design-inspiration-vector-template-167661473.jpg";
export const Loader = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <PulseIndicator size={50} color="#546ee5" />
    </View>
  );
};

export const GenreComponent = ({ navigation }) => {
  const { setPagination, pagination, forGenre } = useContext(MoviesContext);

  const numColm = 3;
  const onEndReached = () => {
    setPagination(pagination + 1);
  };

  const renderItem = ({ item }) => {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => navigation.navigate("MoviesDetails", { id: item.id })}
        >
          <MoviesView>
            <MovieCard elevation={5}>
              <FavouratesComponent movie={item} />

              <MovieCardCover
                source={{
                  uri: item.medium_cover_image
                    ? item.medium_cover_image
                    : defaultImage,
                }}
              />
            </MovieCard>
          </MoviesView>
        </TouchableOpacity>
      </Container>
    );
  };

  return (
    <BackgroundColor>
      <FlashList
        data={forGenre}
        numColumns={numColm}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
        ListFooterComponent={Loader}
        estimatedItemSize={150}
        keyExtractor={(item) => item.id}
      />
    </BackgroundColor>
  );
};
