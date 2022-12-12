import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { FirebaseAuth } from "../../../Firebase/context/FirebaseAuthProvider";
import { ErrorText } from "../../../utils/BasicStyles";
import { BottomSheetComponent } from "../components/BottomSheetComponent";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
export const SignInScreen = ({ navigation }) => {
  const { signIn, error, isLoading } = useContext(FirebaseAuth);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  console.log(isLoading);

  const snapPoints = ["70%", "90%"];
  return (
    <>
      <View>
        <Image
          style={{ position: "absolute", top: -200, left: -70 }}
          source={require("../../../assets/images/p_frozen2_19644_4c4b423d.jpeg")}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "black"]}
          style={{
            height: 400,
            width: 530,

            top: 230,
          }}
        />
      </View>
      <BottomSheetComponent snapPoints={snapPoints}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            label="username"
            value={userName}
            style={{
              width: 320,
              marginBottom: 10,
              backgroundColor: "#d9cffc",
            }}
            textContentType="email"
            keyboardType="email-address"
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            label="Password"
            value={password}
            style={{
              width: 320,
              marginBottom: 10,
              backgroundColor: "#d9cffc",
            }}
            textContentType="password"
            keyboardType="email-address"
            onChangeText={(text) => setPassword(text)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          {!isLoading ? (
            <Button
              icon="account-lock-open-outline"
              mode="contained"
              style={{
                width: 320,
                borderRadius: 3,
                marginTop: 15,
                backgroundColor: "#ff314e",
              }}
              onPress={() => signIn(userName, password)}
            >
              SignIn
            </Button>
          ) : (
            <SkypeIndicator size={50} color="#546ee5" />
          )}
          <TouchableOpacity
            style={{ marginVertical: 13 }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <ErrorText>Don't have an account SignUp</ErrorText>
          </TouchableOpacity>
        </View>
      </BottomSheetComponent>
    </>
  );
};
