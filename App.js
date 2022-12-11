import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";

import { IndexNavigation } from "./src/navigations/IndexNavigation";
import { theme } from "./theme";

import {
  useFonts as useLexnd,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import {
  useFonts as useAlata,
  Alata_400Regular,
} from "@expo-google-fonts/alata";
import styled, { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  const [LextedLoad] = useLexnd({
    Lexend_400Regular,
    Lexend_700Bold,
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <IndexNavigation />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;

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
