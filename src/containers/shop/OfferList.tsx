import React from 'react';
import {ScrollView, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {OfferItem} from '../../components/shop/OfferItem';
import {XOR} from '../../types/app/operators';
import {Combo, Offer} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  inlineView: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  main: {
    marginHorizontal: 10
  },
});

interface OfferListProps {
  offers: XOR<Offer, Combo<Offer>>[];
  style: StyleProp<ViewStyle>
}

export function OfferList(props: OfferListProps) {
  const {offers} = props;

  return (
    <ScrollView
      style={props.style}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={[style.main, style.inlineView]}>
        {offers.map((o, i) => (
          <OfferItem key={'offer-' + i} offer={o} />
        ))}
      </View>
    </ScrollView>
  );
}
