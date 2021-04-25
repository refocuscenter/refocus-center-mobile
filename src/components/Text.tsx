import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import {colors, fonts} from '../theme';

const style = StyleSheet.create({
  text: {
    color: colors.darkPurple,
    fontFamily: fonts.mainFontFamily,
  },
});

interface TextProps extends RNTextProps {
  children?: string;
}

export function Text(props: TextProps) {
  return <RNText {...props} style={[style.text, props.style]} />;
}
