import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "../screens/HomeScreen";

import { MainNavigation } from "./MainNavigation";

export const IndexNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
