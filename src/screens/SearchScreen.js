import { FlashList } from "@shopify/flash-list";
import AnimatedLottieView from "lottie-react-native";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";

import { MoviesContext } from "../../contexts/MoviesContext";
import {
  BackgroundColor,
  DescriptionText,
  HeaderText,
  HeaderTextHot,
  MovieCard,
  MovieCardCover,
} from "../../utils/BasicStyles";

import { FavouratesComponent } from "../components/FavouratesComponent";
import { Loader, renderItem } from "../components/GenreComponent";
import {
  Container,
  MoviesView,
  ParentContainer,
  ScrollViewContainer,
  ViewContainer,
} from "../components/TrendingComponent";
//import CircularProgress from "react-native-circular-progress";
const star = "https://cdn-icons-png.flaticon.com/512/786/786432.png";
export const SearchScreen = ({ navigation }) => {
  const {
    setSearchMovie,
    setPagination,
    pagination,
    searchMovie,
    returnSearchMovies,
  } = useContext(MoviesContext);

  const [value, setValue] = useState("");
  const [search, SetSearch] = useState("");

  const searchQuiry = (query) => setValue(query);

  // useEffect(() => {
  //   setSearchMovie(search);
  // }, [search]);

  const numColm = 1;
  const onEndReached = () => {
    setPagination(pagination + 1);
  };

  // const renderItem = ({ item }) => {
  //   let num = Math.round(item.rating);
  //   return (
  //     <Container>
  //       <TouchableOpacity
  //         onPress={() => navigation.navigate("MoviesDetails", { id: item.id })}
  //       >
  //         <MoviesView style={{ flexDirection: "row" }}>
  //           <MovieCard elevation={5}>
  //             <FavouratesComponent />

  //             <MovieCardCover
  //               source={{
  //                 uri: item.medium_cover_image
  //                   ? item.medium_cover_image
  //                   : defaultImage,
  //               }}
  //             />
  //           </MovieCard>
  //           <View style={{ flexShrink: 1 }}>
  //             <DescriptionText>{item.title}</DescriptionText>
  //             <View style={{ flexDirection: "row", paddingLeft: 10 }}>
  //               {Array.from(Array(num), (e, num) => {
  //                 return (
  //                   <Image
  //                     style={{ height: 15, width: 15 }}
  //                     key={num}
  //                     source={{ uri: star }}
  //                   />
  //                 );
  //               })}
  //             </View>
  //           </View>
  //         </MoviesView>
  //       </TouchableOpacity>
  //     </Container>
  //   );
  // };

  return (
    <ViewContainer>
      <Searchbar
        autoCorrect={false}
        inputStyle={{ color: "#C6DAF7" }}
        placeholder="Search a movie here..."
        placeholderTextColor="#C6DAF7"
        style={{
          backgroundColor: "#2d2d2e",
          margin: 15,
          color: "#C6DAF7",
        }}
        iconColor="#C6DAF7"
        onChangeText={searchQuiry}
        value={value}
        onSubmitEditing={() => {
          setSearchMovie(value);
        }}
      />
      <ScrollViewContainer>
        {searchMovie.length >= 2 ? (
          // <FlashList
          //   data={returnSearchMovies}
          //   numColumns={numColm}
          //   onEndReached={onEndReached}
          //   onEndReachedThreshold={1}
          //   ListFooterComponent={Loader}
          //   estimatedItemSize={150}
          //   renderItem={renderItem}
          // />
          <ParentContainer>
            {returnSearchMovies ? (
              returnSearchMovies.map((movie) => {
                let num = Math.round(movie.rating);
                return (
                  <Container key={movie.id}>
                    <FavouratesComponent movie={movie} />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("MoviesDetails", { id: movie.id })
                      }
                    >
                      <MoviesView style={{ flexDirection: "row" }}>
                        <MovieCard elevation={5}>
                          <MovieCardCover
                            source={{
                              uri: movie.medium_cover_image
                                ? movie.medium_cover_image
                                : defaultImage,
                            }}
                          />
                        </MovieCard>
                        <View style={{ flexShrink: 1 }}>
                          <DescriptionText>{movie.title}</DescriptionText>
                          <View
                            style={{ flexDirection: "row", paddingLeft: 10 }}
                          >
                            {Array.from(Array(num), (e, num) => {
                              return (
                                <Image
                                  style={{ height: 15, width: 15 }}
                                  key={num}
                                  source={{ uri: star }}
                                />
                              );
                            })}
                          </View>
                        </View>
                      </MoviesView>
                    </TouchableOpacity>
                  </Container>
                );
              })
            ) : (
              <BackgroundColor
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <DescriptionText>
                  No movie found for {searchMovie}
                </DescriptionText>
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "rgba(255, 255, 255, 0.0)",
                  }}
                  source={require("../../assets/gifs/404.gif")}
                />
              </BackgroundColor>
            )}
          </ParentContainer>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AnimatedLottieView
              autoPlay
              style={{
                width: 300,
                height: 300,
                backgroundColor: "rgba(255, 255, 255, 0.0)",
              }}
              source={require("../../assets/Animations/78631-searching.json")}
            />
          </View>
        )}
      </ScrollViewContainer>
    </ViewContainer>
  );
};
