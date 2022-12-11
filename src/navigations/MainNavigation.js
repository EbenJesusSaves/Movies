import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { ExploreScreen } from "../screens/ExploreScreen";
import { GenryScreen } from "../screens/GenryScreen";
import { GenreComponent } from "../components/GenreComponent";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#011433",
            //  margin: 10,
            borderRadius: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home-lightning-bolt"
                : "home-lightning-bolt-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "book-search" : "book-search-outline";
            } else if (route.name === "Genry") {
              iconName = focused ? "movie-filter" : "movie-filter-outline";
            } else if (route.name === "Explore") {
              iconName = focused
                ? "account-settings"
                : "account-settings-outline";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{ headerShown: false, tabBarShowLabel: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false, tabBarShowLabel: false }}
          name="Genry"
          component={GenryScreen}
        />
        <Tab.Screen
          options={{ headerShown: false, tabBarShowLabel: false }}
          name="Search"
          component={SearchScreen}
        />

        <Tab.Screen
          options={{ headerShown: false, tabBarShowLabel: false }}
          name="Explore"
          component={ExploreScreen}
        />
      </Tab.Navigator>
    </View>
  );
};
