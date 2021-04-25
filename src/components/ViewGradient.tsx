import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {colors} from '../theme';
import {Gradient} from '../types/app/theme';

export type GradientType = 'primary' | 'secondary';

export interface ViewGradientProps extends Partial<LinearGradientProps> {
  type?: GradientType;
  gradient?: Gradient;
  children?: any;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;

  /**
   * Only for secondary type
   */
  borderWidth?: number;

  /**
   * Only for secondary type
   */
  borderRadius?: number;
}

export function ViewGradient(props: ViewGradientProps) {
  const {type = 'primary'} = props;

  return type === 'primary' ? (
    <PrimaryViewGradient {...props} />
  ) : (
    <SecondaryViewGradient {...props} />
  );
}

function PrimaryViewGradient(props: ViewGradientProps) {
  const {gradient = colors.MainDegrade100, children} = props;

  return (
    <LinearGradient
      locations={gradient.locations}
      start={gradient.start}
      end={gradient.end}
      colors={gradient.colors}
      {...props}>
      {children}
    </LinearGradient>
  );
}

function SecondaryViewGradient(props: ViewGradientProps) {
  const {
    gradient = colors.MainDegrade100,
    children,
    containerStyle,
    borderRadius = 8,
    borderWidth = 1,
  } = props;

  const {getGradientStyle, getContainerStyle} = style;

  return (
    <LinearGradient
      locations={gradient.locations}
      start={gradient.start}
      end={gradient.end}
      colors={gradient.colors}
      style={[getGradientStyle(borderRadius, borderWidth), containerStyle]}>
      <View {...props} style={[getContainerStyle(borderRadius), props.style]}>
        {children}
      </View>
    </LinearGradient>
  );
}

const style = {
  getGradientStyle: (
    borderRadius: number,
    borderWidth: number,
  ): StyleProp<ViewStyle> => {
    return {
      borderRadius: borderWidth + borderRadius,
      padding: borderWidth,
    };
  },
  getContainerStyle: (borderRadius: number): StyleProp<ViewStyle> => {
    return {
      flexGrow: 1,
      borderRadius: borderRadius,
      backgroundColor: colors.white,
    };
  },
};
