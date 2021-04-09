import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Combo, Offer} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
  },
});

export interface ComboImagesProps {
  combo: Combo<Offer>;
}

export function ComboImages({combo}: ComboImagesProps) {
  return (
    <View>
      <View style={{width: 100, height: 150}} />
      {combo.offers
        ?.map((offer, i, arr) => (
          <Image
            key={'offer-combo-' + i}
            style={[
              style.image,
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
  );
}
