import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  useFonts as useLexnd,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import {
  useFonts as useAlata,
  alata_400Regular,
} from "@expo-google-fonts/alata";

//this loads the lexend fonts
const [LextedLoad] = useLexnd({
  Lexend_400Regular,
});

//this loads the alata fonts

const [AlataLoaded] = useAlata({
  alata_400Regular,
});

//checks before loading the app
if (!AlataLoaded || !LextedLoad) {
  return null;
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
