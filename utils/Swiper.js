import React, { Component, useContext } from "react";
import { View, Image, StatusBar, Dimensions, Text } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";
import { MovieDbContext } from "../contexts/MovieDbContext";
import { HeaderText } from "./BasicStyles";

const styles = {
  wrapper: {
    // justifyContent: "center",
    // alignItems: "center",
  },

  slide: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "85%",
    height: 200,
    color: "white",
    borderRadius: 15,
  },
};

const ComingText = styled.Text`
  font-family: ${(p) => p.theme.fonts.body};
  color: ${(p) => p.theme.colors.ui.secondary};
  font-size: ${(p) => p.theme.fontSizes.body};
  position: absolute;
  bottom: 10px;
  z-index: 2;
  background-color: "rgba(0,0,2,.4)";
`;
export function Swipper() {
  const { dataReceived } = useContext(MovieDbContext);

  return (
    dataReceived && (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: "rgba(255,255,255,.3)",
                width: 0,
                height: 0,
                borderRadius: 4,
                marginLeft: 4,
                marginRight: 4,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "#fff",
                width: 0,
                height: 0,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          paginationStyle={{
            bottom: 30,
          }}
          loop={true}
          autoplay={true}
        >
          {dataReceived &&
            dataReceived.map((movies) => {
              return (
                <View
                  key={movies.id}
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ComingText>{movies.title}</ComingText>
                  {
                    <Image
                      style={styles.image}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`,
                      }}
                    />
                  }
                </View>
              );
            })}
        </Swiper>
      </View>
    )
  );
}

//  <View style={styles.slide}>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://reactjs.org/logo-og.png" }}
//             resizeMode="cover"
//           />
//         </View>
//         <View style={styles.slide}>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://reactjs.org/logo-og.png" }}
//             resizeMode="cover"
//           />
//         </View>
//         <View style={styles.slide}>
//           <Image
//             style={styles.image}
//             source={{ uri: "https://reactjs.org/logo-og.png" }}
//           />
//         </View>
