import React, {
  useCallback,
  useRef,
  useMemo,
  useEffect,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import styled from "styled-components";
import { DescriptionText, HeaderText, HeaderTextHot } from "./BasicStyles";
import { Button } from "react-native-paper";
import YoutubeIframe from "react-native-youtube-iframe";

  const star = "https://cdn-icons-png.flaticon.com/512/786/786432.png";

const ImageView = styled.View`
  background-color: transparent;
  flex-direction: row;
`;

const ImageContainer = styled.Image`
  width: 150px;
  height: 170px;
  border-radius: 10px;
  background-color: transparent;
`;
const CastImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: transparent;
`;
const Htext = styled(HeaderText)`
  color: ${(p) => p.theme.colors.text.disabled};
`;
const ButtonView = styled.View`
  padding-left: 10;
  padding-top: 10;
  width: 130px;
`;

export const ButtomSheet = ({ movie }) => {
  // hooks
  console.log(movie);
  const sheetRef = useRef(null);

  const snapPoints = ["40%", "80%"];

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  let num = Math.round(movie.rating);

  // renders
  return (
    <BottomSheet
      backgroundStyle={{ backgroundColor: "rgba(14, 15, 21,0.9)" }}
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.container}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <ImageView>
            <ImageContainer source={{ uri: movie.medium_cover_image }} />
            <View style={{ flexShrink: 1 }}>
              <HeaderText>{movie.title}</HeaderText>
              <Htext>({movie.year})</Htext>
              <DescriptionText>
                {movie.genres.map((item) => item + " ")}
              </DescriptionText>
              <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                {Array.from(Array(num), (e, num) => {
                  return (
                    <Image
                      style={{ height: 15, width: 15 }}
                      key={num}
                      source={{ uri: star }}
                    />
                  );
                })}
                <DescriptionText>{Math.round(movie.rating)}</DescriptionText>
              </View>
              <ButtonView>
                <Button
                  style={{
                    backgroundColor: "#070d2d",
                    borderRadius: 3,
                  }}
                  mode="contained"
                >
                  likes {movie.like_count}
                </Button>
              </ButtonView>
            </View>
          </ImageView>
        </View>
        <HeaderText>Description</HeaderText>
        <DescriptionText>{movie.description_full}</DescriptionText>
        <View>
          <HeaderTextHot>Trailer</HeaderTextHot>
          <YoutubeIframe
            height={210}
            play={playing}
            videoId={`${movie.yt_trailer_code}`}
            onChangeState={onStateChange}
          />
          <Button
            mode="contained"
            style={{
              backgroundColor: "#070d2d",
              borderRadius: 3,
              marginBottom: 20,
            }}
            onPress={togglePlaying}
          >
            {playing ? "pause" : "play"}
          </Button>

          {movie.cast && <HeaderTextHot>Cast</HeaderTextHot>}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {movie.cast &&
              movie.cast.map((item) => {
                return (
                  <View>
                    <CastImage source={{ uri: item.url_small_image }} />
                  </View>
                );
              })}
          </View>
          <HeaderTextHot>Torrents</HeaderTextHot>
          <DescriptionText>
            Kindly Note: torrents are not available for Iphones yet 🥲🥲🥲
          </DescriptionText>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 20,
              marginBottom: 20,
            }}
          >
            {movie.torrents &&
              movie.torrents.map((movie) => {
                return (
                  <View
                    style={{
                      paddingBottom: 20,
                      borderRadius: 10,
                    }}
                  >
                    <DescriptionText>Quality {movie.quality} </DescriptionText>
                    <DescriptionText>Size {movie.size} </DescriptionText>
                    <TouchableOpacity
                      onPress={() => Linking.openURL(movie.url)}
                    >
                      <Button
                        style={{
                          backgroundColor: "#070d2d",
                          borderRadius: 3,
                        }}
                        mode="contained"
                      >
                        Download
                      </Button>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
          <DescriptionText>
            {"      "} Designed and Developed by Eben
          </DescriptionText>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 11,
    },

    shadowOpacity: 1,
    shadowRadius: 15.19,

    elevation: 26,
  },
  contentContainer: {
    margin: 10,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
  },
});
