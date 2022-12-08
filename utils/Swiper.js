import React, { Component } from "react";
import { View, Image, StatusBar, Dimensions, Text } from "react-native";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

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
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "85%",
    height: "95%",
    color: "white",
    borderRadius: 15,
  },
};
export function Swipper() {
  const swiperArray = [
    "https://www.animatedtimes.com/wp-content/uploads/2022/05/ICE-AGE-7.jpg",
    "https://i.ytimg.com/vi/Hv3obL9HqyY/maxresdefault.jpg",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/diary-of-a-wimpy-kid-movies-ranked.jpg",
    "https://www.themoviedb.org/t/p/w780/bF9k4L3E93fHESs55zcyvxG5qZH.jpg",
    "https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200",
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Swiper
        style={styles.wrapper}
        dot={
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              width: 6,
              height: 6,
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
              width: 6,
              height: 6,
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
        {swiperArray.map((item) => {
          return (
            <View
              style={{ justifyContent: "center", alignItems: "center" }}
              key={item}
            >
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          );
        })}
      </Swiper>
    </View>
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
