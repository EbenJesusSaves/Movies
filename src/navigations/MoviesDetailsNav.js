import React from "react";
import { Text, View } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { TrendingComponent } from "../components/TrendingComponent";
import { MoviesDetailsScreen } from "../screens/MoviesDetailsScreen";
import { GenryScreen } from "../screens/GenryScreen";
import { GenreComponent } from "../components/GenreComponent";
import { SearchScreen } from "../screens/SearchScreen";
import { ExploreScreen } from "../screens/ExploreScreen";
import { FavouratesScrren } from "../screens/FavouratesScreen";

const Stack = createStackNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const MoviesDetailsNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
        cardStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen name="TrendingScreen" component={TrendingComponent} />
      <Stack.Screen name="GenreScreen" component={GenreComponent} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="FavouratesScreen" component={FavouratesScrren} />
      <Stack.Screen name="MoviesDetails" component={MoviesDetailsScreen} />
    </Stack.Navigator>
  );
};
