import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {actions, colors, fonts} from '../../theme';
import {Combo, Offer} from '../../types/domain/interfaces';
import {Text} from '../Text';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {XOR} from '../../types/app/operators';
import {ViewGradient} from '../ViewGradient';
import {toBRL} from '../../utils/quotation';
import {TextGradient} from '../TextGradient';

const style = StyleSheet.create({
  mainView: {
    width: '47.9562053%',
    margin: 4,
    borderRadius: 20,
  },
  gradientContainer: {
    padding: 4,
    paddingVertical: 8,
    paddingHorizontal: 11,
  },
  offerView: {
    alignItems: 'center',
  },
  textOfferView: {
    overflow: 'hidden',
    height: 45,
    //justifyContent: 'center',
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

export interface OfferItemProps {
  offer: XOR<Offer, Combo<Offer>>;
  [key: string]: any;
}

export function OfferItem({offer}: OfferItemProps) {
  const isCombo = offer.offers != undefined;

  return (
    <View style={style.mainView}>
      <ViewGradient
        type="secondary"
        containerStyle={style.gradientContainer}
        gradient={colors.MainDegrade60}>
        <View style={style.offerView}>
          {isCombo ? (
            <View>
              <View style={{width: 100, height: 150}} />
              {offer.offers
                ?.map((offer, i, arr) => (
                  <Image
                    key={'offer-combo-' + i}
                    style={[
                      style.imageCombo,
                      {
                        zIndex: arr.length - i - 1,
                        left: -i * 40 + 20,
                        top: -i * 40 + 40,
                      },
                    ]}
                    source={{uri: offer.image}}
                  />
                ))
                .slice(0, 2)}
            </View>
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

          <IconButton>
            <IconMaterialIcons
              size={20}
              color={colors.white}
              name="add-shopping-cart"
            />
          </IconButton>
        </View>
      </ViewGradient>
    </View>
  );
}

const styleIconButton = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 8,
  },
});

interface IconButtonProps {
  icon?: any;
  children?: any;
  style?: any;
}

function IconButton(props: IconButtonProps) {
  return (
    <TouchableOpacity activeOpacity={actions.activeOpacity}>
      <ViewGradient
        gradient={colors.MainDegrade60}
        style={[styleIconButton.container, props.style]}
        {...props}>
        {props.icon || props.children}
      </ViewGradient>
    </TouchableOpacity>
  );
}
