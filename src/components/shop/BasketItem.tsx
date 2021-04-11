import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {actions, colors, fonts} from '../../theme';
import {
  BasketItem,
  Combo,
  Offer,
  OfferXorCombo,
} from '../../types/domain/interfaces';
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
import {AmountView} from './AmountView';

const style = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    flexBasis: 0,
  },
  gradientContainer: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  offerView: {
    flexBasis: 0,
    flexGrow: 1,
    marginRight: 0,
    marginLeft: 15,
  },
  offerViewImage: {
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginHorizontal: 5,
  },
  valueText: {
    fontFamily: fonts.mediumFontFamily,
    color: colors.darkPurple,
    alignSelf: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  imageCombo: {
    borderRadius: 100,
    position: 'absolute',
  },
});

export interface BasketItemComponentProps extends ViewGradientProps {
  basketItem: BasketItem;
  amountState?: [number, React.Dispatch<React.SetStateAction<number>>];
  iconButtonProps?: IconButtonProps;
}

export function BasketItemComponent(props: BasketItemComponentProps) {
  const {basketItem, iconButtonProps, amountState = useState(0)} = props;
  const {offer} = basketItem.portion;

  const [amount, setAmount] = amountState;

  const isCombo = offer.offers != undefined;

  return (
    <ViewGradient
      type="secondary"
      gradient={colors.MainDegrade60}
      borderRadius={10}
      {...props}
      containerStyle={[style.mainView, props.containerStyle]}
      style={[style.gradientContainer, props.style]}>
      <View style={style.offerViewImage}>
        {isCombo ? (
          <ComboImages combo={offer as Combo<Offer>} size={58} />
        ) : (
          <Image style={style.image} source={{uri: offer.image}} />
        )}
      </View>
      <View style={style.offerView}>
        <View style={style.textOfferView}>
          <Text style={style.textOffer}>{offer.name}</Text>
        </View>
        <View style={style.bottomView}>
          <TextGradient gradient={colors.MainDegrade60} style={style.valueText}>
            {toBRL(offer.value / 100)}
          </TextGradient>

          {amount === 0 ? (
            <IconButton
              onPress={() => setAmount(amount + 1)}
              {...iconButtonProps}>
              <IconMaterialIcons
                size={20}
                color={colors.white}
                name="add-shopping-cart"
              />
            </IconButton>
          ) : (
            <AmountView
              style={{marginTop: 12}}
              amountState={amountState}></AmountView>
          )}
        </View>
      </View>
    </ViewGradient>
  );
}
