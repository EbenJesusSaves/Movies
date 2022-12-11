import React, { useCallback, useRef, useMemo, useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { BackgroundColor } from "../../utils/BasicStyles";
import { ViewContainer } from "../components/TrendingComponent";
import { FavouratesScrren } from "./FavouratesScreen";

export const ExploreScreen = ({ navigation }) => {
  // hooks

  // render

  // renders
  return (
    <ViewContainer>
      <View>
        <Button
          onPress={() => navigation.navigate("FavouratesScreen")}
          style={{
            backgroundColor: "#070d2d",
            borderRadius: 3,
          }}
          mode="contained"
        >
          FavouratesScreen
        </Button>
      </View>
    </ViewContainer>
  );
};
