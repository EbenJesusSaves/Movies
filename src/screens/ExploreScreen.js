import React, { useEffect, useState, useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import styled from "styled-components";
import { FirebaseAuth } from "../../Firebase/context/FirebaseAuthProvider";
import { BackgroundColor, DescriptionText } from "../../utils/BasicStyles";
import { ViewContainer } from "../components/TrendingComponent";
import { FavouratesScrren } from "./FavouratesScreen";

//image piker

import { Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ExploreScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  //this is for the image picker testing
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // this is the closing the image picker
  const { logout, user } = useContext(FirebaseAuth);
  const saveUserProfile = async (image, user) => {
    try {
      const usePicture = JSON.stringify(image);
      await AsyncStorage.setItem(`@pic--${user.uid}`, usePicture);
    } catch (error) {}
  };

  const getUserPicture = async (user) => {
    try {
      const receivedPicture = await AsyncStorage.getItem(`@pic--${user.uid}`);

      if (receivedPicture != null) {
        const pursedData = JSON.parse(receivedPicture);
        setImage(pursedData);
      }
    } catch (error) {}
  };

  // hooks

  useEffect(() => {
    if (user && image) {
      saveUserProfile(image, user);
    }
  }, [image]);

  useEffect(() => {
    getUserPicture(user);
  }, [image]);

  // render
  console.log(user);

  const AvaterContainer = styled.View`
    justify-items: center;
    align-items: center;
    margin-top: 20;
  `;
  // renders
  return (
    <ViewContainer>
      <View>
        <AvaterContainer>
          <TouchableOpacity onPress={pickImage}>
            {!image && (
              <Avatar.Icon size={170} icon="dog" backgroundColor="#ff314e" />
            )}
            {image && (
              <Avatar.Image
                size={170}
                source={{ uri: image }}
                backgroundColor="#ff314e"
              />
            )}
          </TouchableOpacity>
        </AvaterContainer>
        <AvaterContainer>
          <DescriptionText>{user.email}</DescriptionText>
        </AvaterContainer>

        <Button
          onPress={() => navigation.navigate("FavouratesScreen")}
          style={{
            backgroundColor: "#070d2d",
            borderRadius: 3,
            marginVertical: 10,
          }}
          mode="contained"
        >
          FavouratesScreen
        </Button>
        <Button
          onPress={() => logout()}
          style={{
            backgroundColor: "#070d2d",
            borderRadius: 3,
          }}
          mode="contained"
        >
          Log Out
        </Button>
      </View>
    </ViewContainer>
  );
};
