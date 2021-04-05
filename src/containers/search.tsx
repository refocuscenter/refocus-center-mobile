import React from "react";
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { colors, fonts } from "../theme";

const styleSearch = StyleSheet.create({
  textInput: {
    fontFamily: fonts.mainFontFamily,
    fontSize: 15,
  },
});

interface SearchProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export function Search(props: SearchProps) {
  return (
    <View style={[props.containerStyle]}>
      <TextInput
        style={styleSearch.textInput}
        placeholderTextColor={colors.grayC2}
        {...props}></TextInput>
    </View>
  );
}
