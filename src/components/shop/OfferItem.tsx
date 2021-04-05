import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {colors} from '../../theme';
import {Combo, Offer} from '../../types/domain/interfaces';
import {Text} from '../Text';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {XOR} from '../../types/app/operators';
import {ViewGradient} from '../ViewGradient';

const style = StyleSheet.create({
  mainView: {
    width: '47.9562053%',
    backgroundColor: 'red',
    margin: 4,
    borderRadius: 10,
  },
  gradientContainer: {
    padding: 4,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  offerView: {
    alignItems: 'center',
  },
  textOfferView: {
    overflow: 'hidden',
    height: 50,
    justifyContent: 'center',
  },
  textOffer: {
    textAlign: 'center',
  },
  inlineView: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bottomView: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  valueText: {
    color: colors.darkPurple,
    alignSelf: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
});

export interface OfferItemProps {
  offer: XOR<Offer, Combo<Offer>>;
  [key: string]: any;
}

export function OfferItem({offer}: OfferItemProps) {
  return (
    <View style={style.mainView}>
      <ViewGradient type="secondary" containerStyle={style.gradientContainer}>
        <View style={style.offerView}>
          <Image style={style.image} source={{uri: offer.image}} />
          <View style={style.textOfferView}>
            <Text style={style.textOffer}>{offer.name}</Text>
          </View>
        </View>
        <View style={[style.bottomView, style.inlineView]}>
          <Text style={style.valueText}>R$ {offer.value}</Text>
          <IconMaterialCommunityIcons
            size={25}
            color={colors.darkPurple}
            name="basket-fill"
          />
        </View>
      </ViewGradient>
    </View>
  );
}
