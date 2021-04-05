import React from "react"
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import { colors, fonts } from '../theme';

const style = StyleSheet.create({
  text: {
    color: colors.darkPurple,
    fontFamily: fonts.mainFontFamily,
  }
});

export function Text(props: TextProps | any) {
  return <RNText {...props} style={[style.text, props.style]}  />;
}
