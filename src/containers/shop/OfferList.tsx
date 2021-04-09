import React, {useState} from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  FlatList,
  FlatListProps,
  GestureResponderEvent,
} from 'react-native';
import {BlankItem} from '../../components/shop/BlankItem';
import {OfferItem} from '../../components/shop/OfferItem';
import {TextGradient} from '../../components/TextGradient';
import {ViewGradient} from '../../components/ViewGradient';
import {colors} from '../../theme';
import {XOR} from '../../types/app/operators';
import {Combo, Offer, OfferXorCombo} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  main: {
    marginHorizontal: 10,
  },
  item: {
    margin: 4,
  },
});

interface OfferListProps extends Partial<FlatListProps<any>> {
  offers: OfferXorCombo[];
  limit?: number;
  style?: StyleProp<ViewStyle>;

  /**
   * Only exits if limit is defined and is exceeded
   */
  seeMoreItemOnPress?: (event: GestureResponderEvent) => void;
}

export function OfferList(props: OfferListProps) {
  const {offers, limit} = props;

  return (
    <FlatList
      numColumns={2}
      data={createItems(props)}
      keyExtractor={(_, i) => 'offer-item-' + i}
      style={style.main}
      renderItem={createRenderItem(props)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
}

function createItems(props: OfferListProps): OfferXorCombo[] {
  const {offers, limit} = props;

  return limitItems(offers, limit).map((o, i, arr) =>
    limit && i == limit - 1 ? 'see-more' : o,
  );
}

function createRenderItem(props: OfferListProps) {
  const {seeMoreItemOnPress} = props;

  return function renderItem({
    item,
  }: {
    item: OfferXorCombo | 'see-more';
  }) {
    return item !== 'see-more' ? (
      <OfferItem
        containerStyle={style.item}
        offer={item as OfferXorCombo}
      />
    ) : (
      <BlankItem onPress={seeMoreItemOnPress} containerStyle={style.item}>
        Ver mais
      </BlankItem>
    );
  };
}

function limitItems(items: any[], limit?: number) {
  if (limit !== undefined) return items.slice(0, limit);
  else return items;
}
