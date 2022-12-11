import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useContext, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { FirebaseAuth } from "../../../Firebase/context/FirebaseAuthProvider";
import { DescriptionText } from "../../../utils/BasicStyles";
export const BottomSheetComponent = () => {
  const sheetRef = useRef(null);

  const snapPoints = ["60%", "80%"];

  const [text, setText] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const AuthInput = styled(TextInput)``;
  const AuthView = styled.View`
    align-items: center;
    padding: 20px;
  `;

  const { signUp } = useContext(FirebaseAuth);

  return (
    <BottomSheet
      backgroundStyle={{ backgroundColor: "rgba(14, 15, 21,0.6)" }}
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.container}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        <AuthView>
          <View>
            <TextInput
              label="Email"
              value={tempEmail}
              style={{
                width: 320,
                marginBottom: 10,
                backgroundColor: "#140f24",
              }}
              textContentType="email"
              keyboardType="email-address"
              onChangeText={(text) => setTempEmail(text)}
            />
            <TextInput
              label="Password"
              value={password}
              style={{
                width: 320,
                marginBottom: 10,
                backgroundColor: "#140f24",
              }}
              autoCapitalize="none"
              textContentType="password"
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              label="Password"
              value={confirmPassword}
              style={{
                width: 320,
                marginBottom: 10,
                backgroundColor: "#140f24",
              }}
              autoCapitalize="none"
              textContentType="password"
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <Button onPress={() => signUp(tempEmail, password, confirmPassword)}>
            SignUp
          </Button>
        </AuthView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#0000",
    shadowOffset: {
      width: 0,
      height: 11,
    },

    shadowOpacity: 1,
    shadowRadius: 15.19,

    elevation: 26,
  },
  contentContainer: {
    margin: 10,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
  },
});
