import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../theme';
import {ViewGradient} from './ViewGradient';

const style = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  status: {
    backgroundColor: colors.whiteF2,
    borderRadius: 100,
    position: 'absolute',
  },
  midLayer: {
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 100,
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    flex: 1,
    zIndex: 2,
    borderRadius: 100,
  },
});

export interface CircleImageProps {
  size: number;
  uri: string;
  hasStatus?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CircleImage(props: CircleImageProps) {
  const {size, uri, hasStatus} = props;

  return (
    <View style={style.main}>
      <Image style={[{width: size - 20, height: size - 20}, style.image]} source={{uri: uri}} />
      <View style={[{width: size - 5, height: size - 5}, style.midLayer]} />
      {!hasStatus ? (
        <View style={[{width: size, height: size}, style.status]} />
      ) : (
        <ViewGradient style={[{width: size, height: size}, style.status]} />
      )}

      {/* This is a collider */}
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: 'transparent',
          zIndex: 0,
        }}
      />
    </View>
  );
}
