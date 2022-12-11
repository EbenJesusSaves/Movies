import AnimatedLottieView from "lottie-react-native";
import React from "react";
import styled from "styled-components";

const ErrorView = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoadingScreen = () => {
  return (
    <ErrorView>
      <AnimatedLottieView
        autoPlay
        //  ref={animation}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "rgba(255, 255, 255, 0.0)",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/Animations/98770-assistagro-loading-bars.json")}
      />
    </ErrorView>
  );
};
