import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useContext, useRef, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { FirebaseAuth } from "../../../Firebase/context/FirebaseAuthProvider";
import { DescriptionText, ErrorText } from "../../../utils/BasicStyles";

export const BottomSheetComponent = (props) => {
  const sheetRef = useRef(null);

  const snapPoints = ["80%", "90%"];

  const errorDisplay = () => {
    setTimeout(() => <ErrorText>{error}</ErrorText>, 3000);
  };

  return (
    <BottomSheet
      backgroundStyle={{ backgroundColor: "rgba(14, 15, 21,0.6)" }}
      ref={sheetRef}
      index={0}
      snapPoints={props.snapPoints}
      style={styles.container}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {props.children}
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
