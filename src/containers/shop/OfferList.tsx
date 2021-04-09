import React, { useState } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
} from 'react-native';
import {BlankItem} from '../../components/shop/BlankItem';
import {OfferItem} from '../../components/shop/OfferItem';
import {TextGradient} from '../../components/TextGradient';
import {ViewGradient} from '../../components/ViewGradient';
import {colors} from '../../theme';
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
    marginHorizontal: 10,
  },
  item: {
    margin: 4,
  },
});

interface OfferListProps {
  offers: XOR<Offer, Combo<Offer>>[];
  limit?: number;
  style?: StyleProp<ViewStyle>;
}

export function OfferList(props: OfferListProps) {
  const {offers, limit} = props;

  return (
    <View style={props.style}>
      <FlatList
        numColumns={2}
        data={createItems(props)}
        keyExtractor={(_, i) => 'offer-item-' + i}
        style={style.main}
        renderItem={renderItem}
      />
    </View>
  );
}

function createItems(props: OfferListProps): XOR<Offer, Combo<Offer>>[] {
  const {offers, limit} = props;

  return limitItems(offers, limit).map((o, i, arr) =>
    limit && i == limit - 1 ? 'see-more' : o,
  );
}

function renderItem({item}: {item: XOR<Offer, Combo<Offer>> | 'see-more'}) {
  return item !== 'see-more' ? (
    <OfferItem
      containerStyle={style.item}
      offer={item as XOR<Offer, Combo<Offer>>}
    />
  ) : (
    <BlankItem containerStyle={style.item}>Ver mais</BlankItem>
  );
}

function limitItems(items: any[], limit?: number) {
  if (limit !== undefined) return items.slice(0, limit);
  else return items;
}
