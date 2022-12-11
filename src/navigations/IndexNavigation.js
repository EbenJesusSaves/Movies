import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FavouratesContextProvider } from "../../contexts/FavouratesContextProvider";
import { MovieDbContextProvider } from "../../contexts/MovieDbContext";
import { MoviesContextProvider } from "../../contexts/MoviesContext";
import { FirebaseAuthProvider } from "../../Firebase/context/FirebaseAuthProvider";
import { Home } from "../home/Home";

import { MainNavigation } from "./MainNavigation";
import { RegistrationNavigation } from "./RegistrationNavigation";

export const IndexNavigation = () => {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <FirebaseAuthProvider>
          <MovieDbContextProvider>
            <MoviesContextProvider>
              <FavouratesContextProvider>
                {user ? <MainNavigation /> : <RegistrationNavigation />}
              </FavouratesContextProvider>
            </MoviesContextProvider>
          </MovieDbContextProvider>
        </FirebaseAuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
