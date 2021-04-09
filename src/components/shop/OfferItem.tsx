import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {actions, colors, fonts} from '../../theme';
import {Combo, Offer} from '../../types/domain/interfaces';
import {Text} from '../Text';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {XOR} from '../../types/app/operators';
import {ViewGradient, ViewGradientProps} from '../ViewGradient';
import {toBRL} from '../../utils/quotation';
import {TextGradient} from '../TextGradient';
import {ComboImages} from './ComboImages';
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import {IconButton} from '../IconButton';
import {IconGradient} from '../IconGradient';

const style = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    flexBasis: 0,
  },
  gradientContainer: {
    paddingVertical: 8,
    paddingHorizontal: 11,
  },
  offerView: {
    alignItems: 'center',
  },
  textOfferView: {
    overflow: 'hidden',
    height: 45,
  },
  textOffer: {
    //textAlign: 'center',
    //color: colors.
  },
  inlineView: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bottomView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginHorizontal: 5,
  },
  valueText: {
    fontFamily: fonts.mediumFontFamily,
    color: colors.darkPurple,
    alignSelf: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  imageCombo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
  },
});

export interface OfferItemProps extends ViewGradientProps {
  offer: XOR<Offer, Combo<Offer>>;
  amountState?: [number, React.Dispatch<React.SetStateAction<number>>];
  iconButtonProps?: IconButtonProps;
}

export function OfferItem(props: OfferItemProps) {
  const {offer, iconButtonProps, amountState} = props;

  const [amount, setAmount] = amountState ? amountState : useState(0);

  const isCombo = offer.offers != undefined;

  function incrementAmount(event: GestureResponderEvent) {
    setAmount(amount + 1);
  }

  function decreaseAmount(event: GestureResponderEvent) {
    setAmount(amount - 1);
  }

  return (
    <ViewGradient
      type="secondary"
      gradient={colors.MainDegrade60}
      borderRadius={18}
      {...props}
      containerStyle={[style.mainView, props.containerStyle]}
      style={[style.gradientContainer, props.style]}>
      <View style={style.offerView}>
        {isCombo ? (
          <ComboImages combo={offer as Combo<Offer>} />
        ) : (
          <Image style={style.image} source={{uri: offer.image}} />
        )}
        <View style={style.textOfferView}>
          <Text style={style.textOffer}>{offer.name}</Text>
        </View>
      </View>
      <View style={[style.inlineView, style.bottomView]}>
        <TextGradient gradient={colors.MainDegrade60} style={style.valueText}>
          {toBRL(offer.value / 100)}
        </TextGradient>

        {amount === 0 ? (
          <IconButton onPress={incrementAmount} {...iconButtonProps}>
            <IconMaterialIcons
              size={20}
              color={colors.white}
              name="add-shopping-cart"
            />
          </IconButton>
        ) : (
          <AmountView
            amount={amount}
            incrementAmount={incrementAmount}
            decreaseAmount={decreaseAmount}></AmountView>
        )}
      </View>
    </ViewGradient>
  );
}

const styleAmountView = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -8
  },
  textAmount: {},
  icon: {
    //backgroundColor: 'red',
    //paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function AmountView(props: any) {
  const {amount, incrementAmount, decreaseAmount, touchableProps} = props;

  return (
    <View style={styleAmountView.main}>
      <TouchableOpacity
        activeOpacity={actions.activeOpacity}
        onPress={decreaseAmount}>
        <IconGradient
          gradientProps={{gradient: colors.MainDegrade60}}
          gradientSize={{width: 38, height: 28}}>
          <View style={styleAmountView.icon}>
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
          <View style={styleAmountView.icon}>
            <Entypo name="plus" size={28}></Entypo>
          </View>
        </IconGradient>
      </TouchableOpacity>
    </View>
  );
}
