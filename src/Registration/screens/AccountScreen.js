import { LinearGradient } from "expo-linear-gradient";
import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { Image, View } from "react-native";
import { Button } from "react-native-paper";
import {
  BackgroundColor,
  DescriptionText,
  HeaderText,
} from "../../../utils/BasicStyles";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundColor>
      <View>
        <Image
          style={{ position: "absolute", top: 0, left: -70, zIndex: -1 }}
          source={require("../../../assets/images/b3c2da2af47fdd4ea08b8f6c382e18c3.jpg")}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.1)", "black"]}
          style={{
            height: 800,
            width: 530,
            bottom: -100,
            position: "absolute",
          }}
        />
        <View>
          <AnimatedLottieView
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
            source={require("../../../assets/Animations/72235-watch-a-movie-with-popcorn.json")}
          />
        </View>
        <View style={{ zIndex: 2 }}>
          <HeaderText>Movies World </HeaderText>
          <Button
            onPress={() => navigation.navigate("SignUpScreen")}
            style={{ marginBottom: 20, width: 200, alignSelf: "center" }}
            mode="contained"
          >
            Sign Up
          </Button>
          <Button
            onPress={() => navigation.navigate("signInScreen")}
            style={{ marginBottom: 20, width: 200, alignSelf: "center" }}
            mode="contained"
          >
            Login
          </Button>
        </View>
      </View>
    </BackgroundColor>
  );
};
