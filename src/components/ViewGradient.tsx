import { Gradient } from '../types/app/theme';
import { colors, fonts } from '../theme';
import React from 'react';
import { LinearTextGradient } from 'react-native-text-gradient';
import { Text } from 'react-native-paper';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

const style = (() => {

  const BORDER_RADIUS = 8
  const BORDER_WIDTH = 1

  return StyleSheet.create({
    secondaryGradient: {
      borderRadius: BORDER_WIDTH + BORDER_RADIUS,
      padding: BORDER_WIDTH,
    },
    secondaryView: {
      borderRadius: BORDER_RADIUS,
      backgroundColor: colors.white,
    }
  }
  )
})();

export type GradientType = 'primary' | 'secondary';

export interface ViewGradientProps extends Partial<LinearGradientProps> {
  type?: GradientType;
  gradient?: Gradient;
  children?: any;
  containerStyle?: StyleProp<TextStyle>;
}

export function ViewGradient(props: ViewGradientProps) {

  const {
    type = "primary"
  } = props;

  return (
    type === "primary" ?
      <PrimaryViewGradient {...props} /> :
      <SecondaryViewGradient {...props} />
  );
}

function PrimaryViewGradient(props: ViewGradientProps) {
  const {
    gradient = colors.MainDegrade100,
    children
  } = props;

  return <LinearGradient
    locations={gradient.locations}
    start={gradient.start}
    end={gradient.end}
    colors={gradient.colors}
    {...props}
  >
    {children}
  </LinearGradient>
}

function SecondaryViewGradient(props: ViewGradientProps) {
  const {
    gradient = colors.MainDegrade100,
    children,
    containerStyle
  } = props;

  return <View style={props.style}>
    <LinearGradient
      locations={gradient.locations}
      start={gradient.start}
      end={gradient.end}
      colors={gradient.colors}
      style={style.secondaryGradient}
    >
      <View {...props} style={[style.secondaryView, containerStyle]}>
        {children}
      </View>
    </LinearGradient>
  </View>
}
