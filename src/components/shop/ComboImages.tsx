import React from 'react';
import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Combo, Offer} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  image: {
    borderRadius: 100,
    position: 'absolute',
  },
});

export interface ComboImagesProps {
  combo: Combo<Offer>;
  size?: number;
  style?: StyleProp<ViewStyle>
}

export function ComboImages(props: ComboImagesProps) {
  const {combo, size = 100} = props;

  const sliceOffers = combo.offers?.slice(0, 2);
  const {length} = sliceOffers;

  const imageSize = size;

  const displacementX = (40 * imageSize) / 100;
  const displacementY = (40 * imageSize) / 100;

  const factorX = displacementX * (length - 1);
  const factorY = displacementY * (length - 1);

  const width = imageSize + factorX;
  const height = imageSize + factorY;

  return (
    <View style={props.style}>
      <View style={{width, height}} />
      {sliceOffers.map((offer, i, arr) => (
        <Image
          key={'offer-combo-' + i}
          style={[
            style.image,
            {
              width: imageSize,
              height: imageSize,
              zIndex: arr.length - i - 1,
              left: -i * displacementX + factorX,
              top: -i * displacementY + factorY,
            },
          ]}
          source={{uri: offer.image}}
        />
      ))}
    </View>
  );
}
