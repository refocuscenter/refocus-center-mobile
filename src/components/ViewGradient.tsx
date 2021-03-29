import { Gradient } from '../types/app/theme';
import { colors, fonts } from '../theme';
import React from 'react';
import { LinearTextGradient } from 'react-native-text-gradient';
import { Text } from 'react-native-paper';
import { StyleProp, TextStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface ViewGradientProps {
  gradient?: Gradient;
  children?: any;
  style?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<TextStyle>;
}

export function ViewGradient({
  gradient = colors.MainDegrade100,
  style,
  children
}: ViewGradientProps) {
  return (
    <LinearGradient
      locations={gradient.locations}
      start={gradient.start}
      end={gradient.end}
      colors={gradient.colors}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
