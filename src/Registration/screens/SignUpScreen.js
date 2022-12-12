import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

import { BottomSheetComponent } from "../components/BottomSheetComponent";

import { useContext, useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { FirebaseAuth } from "../../../Firebase/context/FirebaseAuthProvider";
import { DescriptionText, ErrorText } from "../../../utils/BasicStyles";
import { SkypeIndicator } from "react-native-indicators";

export const SignUpScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const AuthInput = styled(TextInput)``;
  const AuthView = styled.View`
    align-items: center;
    padding: 20px;
  `;

  const { signUp, error, isLoading } = useContext(FirebaseAuth);

  const snapPoints = ["80%", "90%"];

  return (
    <>
      <View>
        <Image
          source={require("../../../assets/images/Deadpool-Doctor-Strange-in-the-Multiverse-of-Madness.jpg")}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "black"]}
          style={{
            height: 400,
            width: 530,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
      <BottomSheetComponent snapPoints={snapPoints}>
        <View>
          <View style={{ alignItems: "center" }}>
            <View>
              <TextInput
                label="Email"
                value={tempEmail}
                style={{
                  width: 320,
                  marginBottom: 10,
                  backgroundColor: "#d9cffc",
                }}
                textContentType="email"
                keyboardType="email-address"
                onChangeText={(text) => setTempEmail(text)}
              />
            </View>
            <View>
              <TextInput
                label="Password"
                value={password}
                style={{
                  width: 320,
                  marginBottom: 10,
                  backgroundColor: "#d9cffc",
                }}
                autoCapitalize="none"
                textContentType="password"
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View>
              <TextInput
                label="Password"
                value={confirmPassword}
                style={{
                  width: 320,
                  marginBottom: 10,
                  backgroundColor: "#d9cffc",
                }}
                autoCapitalize="none"
                textContentType="password"
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            {error && <ErrorText>{error}</ErrorText>}
            {isLoading ? (
              <ActivityIndicator animating={true} color="#546ee5" />
            ) : (
              <Button
                mode="contained"
                icon="lock-open-outline"
                style={{
                  width: 320,
                  borderRadius: 3,
                  marginTop: 15,
                  backgroundColor: "#ff314e",
                }}
                onPress={() => signUp(tempEmail, password, confirmPassword)}
              >
                SignUp
              </Button>
            )}
            <TouchableOpacity
              style={{ marginVertical: 13 }}
              onPress={() => navigation.navigate("signInScreen")}
            >
              <ErrorText>Already have an Account Sign In</ErrorText>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetComponent>
    </>
  );
};
