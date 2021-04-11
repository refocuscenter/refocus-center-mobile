import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../theme';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default function ShopInfo() {
  return (
    <SafeAreaView style={style.main}>
      <Text>Info</Text>
    </SafeAreaView>
  );
}
