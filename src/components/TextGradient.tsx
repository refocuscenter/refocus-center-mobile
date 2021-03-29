import {Gradient} from '../types/app/theme';
import {colors, fonts} from '../theme';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Text} from 'react-native-paper';
import {StyleProp, TextStyle} from 'react-native';

export interface TextGradientProps {
  gradient?: Gradient;
  children?: any;
  style?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<TextStyle>;
}

export function TextGradient({
  gradient = colors.MainDegrade100,
  style,
  gradientStyle,
  children
}: TextGradientProps) {
  return (
    <LinearTextGradient
      style={gradientStyle}
      locations={gradient.locations}
      colors={gradient.colors}
      start={gradient.start}
      end={gradient.end}>
      <Text style={[{fontFamily: fonts.mainFontFamily, fontSize: 16}, style]}>{children}</Text>
    </LinearTextGradient>
  );
}
