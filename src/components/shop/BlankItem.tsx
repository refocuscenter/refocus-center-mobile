import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import {colors} from '../../theme';
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

interface BlankItemProps extends ViewGradientProps {
  children?: any;
}

export function BlankItem(props: BlankItemProps) {
  return (
    <ViewGradient
      gradient={colors.MainDegrade60}
      borderRadius={18}
      type="secondary"
      {...props}
      style={[style.item, props.style]}
      containerStyle={[style.itemContainer, props.containerStyle]}>
      <TextGradient>{props.children}</TextGradient>
    </ViewGradient>
  );
}
