import React from 'react';
import {ViewGradient, ViewGradientProps} from './ViewGradient';
import MaskedView from '@react-native-community/masked-view';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Size} from '../types/app/theme';
import {LinearGradientProps} from 'react-native-linear-gradient';
import {StyleProp, ViewStyle} from 'react-native';

export interface IconGradientProps {
  icon?: any;
  children?: any;
  gradientSize?: Size;
  gradientProps?: Partial<ViewGradientProps>;
  style?: StyleProp<ViewStyle>;
  maskStyle?: StyleProp<ViewStyle>;
}

export function IconGradient({
  gradientProps,
  icon,
  style,
  maskStyle,
  children,
  gradientSize = {width: 32, height: 32},
}: IconGradientProps) {
  return (
    <MaskedView
      style={[maskStyle]}
      maskElement={
        icon || children || <IconMaterialCommunityIcons name="help" size={32} />
      }>
      <ViewGradient
        style={[
          {height: gradientSize.height, width: gradientSize.width, overflow: "hidden"},
          style,
        ]}
        {...gradientProps}
      />
    </MaskedView>
  );
}
