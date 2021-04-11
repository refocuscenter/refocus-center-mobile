import React, {useState} from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {actions, colors} from '../../theme';
import {IconGradient} from '../IconGradient';
import {TextGradient} from '../TextGradient';

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -8,
  },
  textAmount: {},
  icon: {
    //backgroundColor: 'red',
    //paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface AmountViewProps {
  amountState: [number, React.Dispatch<React.SetStateAction<number>>];
  touchableProps?: any;
  style?: StyleProp<ViewStyle>;
}

export function AmountView(props: AmountViewProps) {
  const {amountState, touchableProps} = props;

  const [amount, setAmount] = amountState;

  function incrementAmount(event: GestureResponderEvent) {
    setAmount(amount + 1);
  }

  function decreaseAmount(event: GestureResponderEvent) {
    setAmount(amount - 1);
  }

  return (
    <View style={[style.main, props.style]}>
      <TouchableOpacity
        activeOpacity={actions.activeOpacity}
        onPress={decreaseAmount}>
        <IconGradient
          gradientProps={{gradient: colors.MainDegrade60}}
          gradientSize={{width: 38, height: 28}}>
          <View style={style.icon}>
            <Entypo name="minus" size={28}></Entypo>
          </View>
        </IconGradient>
      </TouchableOpacity>
      <TextGradient>{amount.toString()}</TextGradient>
      <TouchableOpacity
        activeOpacity={actions.activeOpacity}
        onPress={incrementAmount}>
        <IconGradient
          gradientProps={{gradient: colors.MainDegrade60}}
          gradientSize={{width: 38, height: 28}}>
          <View style={style.icon}>
            <Entypo name="plus" size={28}></Entypo>
          </View>
        </IconGradient>
      </TouchableOpacity>
    </View>
  );
}
