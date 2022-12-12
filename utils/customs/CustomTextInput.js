import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

export const CustomTextInput = (props) => {
  return (
    <View>
      <TextInput
        label={props.label}
        value={props.value}
        onChangeText={props.onPress}
        placeholder={props.placeholder}
        
      />
    </View>
  );
};
