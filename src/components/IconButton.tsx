import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {TouchableProps} from 'react-native-svg';
import {actions, colors} from '../theme';
import {ViewGradient, ViewGradientProps} from './ViewGradient';

const style = StyleSheet.create({
  container: {
    borderRadius: 100,
    //padding: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface IconButtonProps {
  icon?: JSX.Element;
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  touchableProps?: TouchableProps | ViewProps;
  gradientProps?: ViewGradientProps;
  size?: number;
}

export function IconButton(props: IconButtonProps) {
  const {gradientProps, touchableProps, onPress, size = 40} = props;

  return (
    <TouchableOpacity
      activeOpacity={actions.activeOpacity}
      onPress={onPress}
      {...touchableProps}>
      <ViewGradient
        gradient={colors.MainDegrade60}
        {...gradientProps}
        style={[style.container, props.style, {width: size, height: size}]}>
        {props.icon || props.children}
      </ViewGradient>
    </TouchableOpacity>
  );
}
