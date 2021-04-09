import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import {TouchableProps} from 'react-native-svg';
import {actions, colors} from '../../theme';
import {TextGradient} from '../TextGradient';
import {ViewGradient, ViewGradientProps} from '../ViewGradient';

const style = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
});

interface BlankItemProps extends Partial<ViewGradientProps> {
  children?: any;
  touchableProps?: TouchableProps;
  onPress?: (event: GestureResponderEvent) => void;
}

export function BlankItem(props: BlankItemProps) {
  const {onPress, touchableProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={actions.activeOpacity}
      onPress={onPress}
      {...touchableProps}
      style={[style.itemContainer, props.containerStyle]}>
      <ViewGradient
        gradient={colors.MainDegrade60}
        borderRadius={18}
        type="secondary"
        {...props}
        style={[style.item, props.style]}
        containerStyle={style.itemContainer}>
        <TextGradient gradient={colors.MainDegrade60}>
          {props.children}
        </TextGradient>
      </ViewGradient>
    </TouchableOpacity>
  );
}
