import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavouratesContextProvider } from "../../contexts/FavouratesContextProvider";
import { MovieDbContextProvider } from "../../contexts/MovieDbContext";
import { MoviesContextProvider } from "../../contexts/MoviesContext";
import {
  FirebaseAuth,
  FirebaseAuthProvider,
} from "../../Firebase/context/FirebaseAuthProvider";
import { Home } from "../home/Home";

import { MainNavigation } from "./MainNavigation";
import { RegistrationNavigation } from "./RegistrationNavigation";

export const IndexNavigation = () => {
  const [boy, boys] = useState(false);

  const { user } = useContext(FirebaseAuth);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MovieDbContextProvider>
          <MoviesContextProvider>
            <FavouratesContextProvider>
              {user ? <MainNavigation /> : <RegistrationNavigation />}
            </FavouratesContextProvider>
          </MoviesContextProvider>
        </MovieDbContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
