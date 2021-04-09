import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {TouchableProps} from 'react-native-svg';
import {actions, colors} from '../theme';
import {ViewGradient, ViewGradientProps} from './ViewGradient';

const style = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 8,
  },
});

interface IconButtonProps {
  icon?: JSX.Element;
  children?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  touchableProps?: TouchableProps;
  gradientProps?: ViewGradientProps;
}

export function IconButton(props: IconButtonProps) {
  const {gradientProps, touchableProps, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={actions.activeOpacity}
      onPress={onPress}
      {...touchableProps}>
      <ViewGradient
        gradient={colors.MainDegrade60}
        {...gradientProps}
        style={[style.container, props.style]}>
        {props.icon || props.children}
      </ViewGradient>
    </TouchableOpacity>
  );
}
