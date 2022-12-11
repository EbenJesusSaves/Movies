import React, { useEffect, useState, useCallback } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { HeaderText } from "../../utils/BasicStyles";
import { AntDesign } from "@expo/vector-icons";
import { ButtomSheet } from "../../utils/ButtomSheet";
import { LoadingScreen } from "../../utils/LoadingScreen";

const ImageView = styled.Image`
  width: 100%;
  height: 500px;
`;

const DetailsView = styled.ScrollView`
  background-color: white;
  // position: relative;
  /* top: -50px; */
  box-shadow: 20px 5px 15px;
  border-radius: 10px;
  height: 200px;
`;

const TittleText = styled(HeaderText)`
  color: ${(p) => p.theme.colors.text.muted};
  font-size: ${(p) => p.theme.fontSizes.h5};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

const BackButton = styled.TouchableOpacity`
  background-color: ${(p) => p.theme.colors.brand.primary};
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 10px;
  height: 40px;
  width: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const MoviesDetailsScreen = ({ navigation, route }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const { id } = route.params;

  const api = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
  const [movie, setMovie] = useState("");
  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const details = await data.json();
      setMovie(details.data.movie);
    })();
  }, [api]);

  return (
    <View style={{ flex: 1 }}>
      {movie.large_cover_image ? (
        <>
          <BackButton onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={34} color="white" />
          </BackButton>
          <ImageView blurRadius={3} source={{ uri: movie.large_cover_image }} />
          <ButtomSheet movie={movie} />
        </>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
};
