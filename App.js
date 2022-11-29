// import "react-native-gesture-handler";

// import { StatusBar } from "expo-status-bar";

// import { StyleSheet, Text, View } from "react-native";

// import { IndexNavigation } from "./src/navigations/IndexNavigation";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//this loads the lexend fonts

//   return (
//     <NavigationContainer>
//       <SafeAreaProvider>
//         <IndexNavigation />
//         <StatusBar style="auto" />
//       </SafeAreaProvider>
//     </NavigationContainer>
//   );
// }
import * as React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IndexNavigation } from "./src/navigations/IndexNavigation";
import { theme } from "./theme";

import {
  useFonts as useLexnd,
  Lexend_400Regular,
} from "@expo-google-fonts/lexend";

import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import styled, { ThemeProvider } from "styled-components/native";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [LextedLoad] = useLexnd({
    Lexend_400Regular,
  });

  //this loads the alata fonts

  const [AlataLoaded] = useAlata({
    Alata_400Regular,
  });

  // checks before loading the app
  if (!AlataLoaded || !LextedLoad) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <IndexNavigation />
    </ThemeProvider>
  );
}

export default App;
