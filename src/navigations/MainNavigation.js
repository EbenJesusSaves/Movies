import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { ExploreScreen } from "../screens/ExploreScreen";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#011433",
            margin: 10,
            borderRadius: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
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
