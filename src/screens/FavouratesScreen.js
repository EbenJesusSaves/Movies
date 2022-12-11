import React, { useCallback, useRef, useMemo, useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { FavouratesContext } from "../../contexts/FavouratesContextProvider";
import { FlashList } from "@shopify/flash-list";
import {
  BackgroundColor,
  DescriptionText,
  HeaderText,
  MovieCard,
  MovieCardCover,
} from "../../utils/BasicStyles";
import {
  Container,
  MoviesView,
  ViewContainer,
} from "../components/TrendingComponent";
import { FavouratesComponent } from "../components/FavouratesComponent";
import { Button } from "react-native-paper";
export const FavouratesScrren = ({ navigation }) => {
  // hooks

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

  const { favorites } = useContext(FavouratesContext);
  const numberOfColums = 3;
  // render

  // renders
  return (
    <BackgroundColor>
      <ViewContainer style={{ marginTop: 7 }}>
        <HeaderText>Your Favourates Selected</HeaderText>
        <FlashList
          numColumns={numberOfColums}
          data={favorites}
          estimatedItemSize={165}
          renderItem={renderItem}
        />
      </ViewContainer>
    </BackgroundColor>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
