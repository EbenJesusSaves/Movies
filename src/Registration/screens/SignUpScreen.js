import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-svg";
import { DescriptionText } from "../../../utils/BasicStyles";
import { BottomSheetComponent } from "../components/BottomSheetComponent";

const component = () => {
  return (
    <View>
      <DescriptionText>
        Say hi to each person you know on this planet earth
      </DescriptionText>
    </View>
  );
};

export const SignUpScreen = () => {
  return (
    <>
      <View>
        <Image
          source={require("../../../assets/images/Deadpool-Doctor-Strange-in-the-Multiverse-of-Madness.jpg")}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "black"]}
          style={{
            height: 400,
            width: 530,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
      <BottomSheetComponent component={component} />
    </>
  );
};
