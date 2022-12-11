import React, { useContext } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { MovieDbContext } from "../../contexts/MovieDbContext";
import { MoviesContext } from "../../contexts/MoviesContext";
import {
  HeaderText,
  HeaderTextHot,
  MovieCard,
  MovieCardCover,
} from "../../utils/BasicStyles";
import { Swipper } from "../../utils/Swiper";
import { FavouratesComponent } from "./FavouratesComponent";

const ImageView = styled.Image`
  height: 150px;
  width: 120px;
`;

export const Container = styled.ScrollView`
  /* flex-direction: row;
    background-color: red; */
  margin-bottom: 10px;
`;

export const ParentContainer = styled.View`
  flex: 1;
  /* width: 100%; */
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const MoviesView = styled.View`
  flex: 1;
  align-items: center;
  margin: 2px;
`;
export const SwipperView = styled.View`
  height: 250px;

  /* width: 100%; */
`;
const defaultImage =
  "https://thumbs.dreamstime.com/b/movie-film-company-logo-design-vector-template-movie-film-company-logo-design-inspiration-vector-template-167661473.jpg";

const isIOS = Platform.OS === "ios";

export const ScrollViewContainer = styled.ScrollView`
  margin-top: ${isIOS ? 35 : 0};
`;

export const ViewContainer = styled.View`
  padding-top: ${isIOS ? "35px" : 0};
  flex: 1;
  background-color: black;
`;

export const TrendingComponent = ({ navigation }) => {
  const { dataReturned, returnMovies } = useContext(MoviesContext);

  return (
    // <SafeAreaView>
    <ScrollViewContainer>
      <SwipperView>
        <HeaderText>Coming Soon</HeaderText>
        <Swipper />
        <HeaderTextHot>Trending</HeaderTextHot>
      </SwipperView>
      <ParentContainer>
        {returnMovies &&
          returnMovies.map((data) => {
            return (
              <>
                <Container key={data.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("MoviesDetails", { id: data.id })
                    }
                  >
                    <MoviesView>
                      <MovieCard elevation={5}>
                        <FavouratesComponent movie={data} />

                        <MovieCardCover
                          source={{
                            uri: data.medium_cover_image
                              ? data.medium_cover_image
                              : defaultImage,
                          }}
                        />
                      </MovieCard>
                    </MoviesView>
                  </TouchableOpacity>
                </Container>
              </>
            );
          })}
      </ParentContainer>
    </ScrollViewContainer>
    // </SafeAreaView>
  );
};
