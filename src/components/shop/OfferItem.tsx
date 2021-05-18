import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../theme';
import {Combo, Offer, OfferXorCombo} from '../../types/domain/interfaces';
import {toBRL} from '../../utils/quotation';
import {IconButton} from '../IconButton';
import {Text} from '../Text';
import {TextGradient} from '../TextGradient';
import {ViewGradient, ViewGradientProps} from '../ViewGradient';
import {AmountView} from './AmountView';
import {ComboImages} from './ComboImages';

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
    textAlign: 'left',
  },
  bottomView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
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
  offer: OfferXorCombo;
  amountState?: [number, React.Dispatch<React.SetStateAction<number>>];
  iconButtonProps?: IconButtonProps;
  onIncreaseAmount?: (setAmount: Function) => void;
  onDecreaseAmount?: (setAmount: Function) => void;
}

function usePrevious(value: any) {
  const ref = useRef<typeof value>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function OfferItem(props: OfferItemProps) {
  const {
    offer,
    iconButtonProps,
    amountState = useState(0),
    onIncreaseAmount,
    onDecreaseAmount,
  } = props;

  const [amount, setAmount] = amountState;
  const previousAmount = usePrevious(amount);

  const isCombo = offer.offers != undefined;

  useEffect(() => {
    if (previousAmount > amount) {
      if (onDecreaseAmount != undefined) {
        onDecreaseAmount(setAmount);
      }
    } else if (previousAmount < amount) {
      if (onIncreaseAmount != undefined) {
        onIncreaseAmount(setAmount);
      }
    }
  }, [amount]);

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
      </View>
      <View style={style.textOfferView}>
        <Text style={style.textOffer}>{offer.name}</Text>
      </View>
      <View style={style.bottomView}>
        <TextGradient gradient={colors.MainDegrade60} style={style.valueText}>
          {toBRL(offer.value / 100)}
        </TextGradient>

        {amount === 0 ? (
          <IconButton
            onPress={() => {
              setAmount(amount + 1);
            }}
            {...iconButtonProps}>
            <IconMaterialIcons
              size={20}
              color={colors.white}
              name="add-shopping-cart"
            />
          </IconButton>
        ) : (
          <AmountView style={{marginTop: 12}} amountState={amountState} />
        )}
      </View>
    </ViewGradient>
  );
}
