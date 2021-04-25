import React from 'react';
import {
  FlatList,
  FlatListProps,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {BlankItem} from '../../components/shop/BlankItem';
import {OfferItem} from '../../components/shop/OfferItem';
import {OfferXorCombo} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  main: {
    marginHorizontal: 10,
  },
  item: {
    margin: 4,
  },
});

interface OfferListProps extends Partial<FlatListProps<any>> {
  offers?: OfferXorCombo[];
  limit?: number;
  style?: StyleProp<ViewStyle>;

  /**
   * Only exits if limit is defined and is exceeded
   */
  seeMoreItemOnPress?: (event: GestureResponderEvent) => void;
}

export function OfferList(props: OfferListProps) {
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

  if (!offers) return [];

  return limitItems(offers, limit).map((o, i, arr) =>
    limit && i == limit - 1 ? 'see-more' : o,
  );
}

function createRenderItem(props: OfferListProps) {
  const {seeMoreItemOnPress} = props;

  return function renderItem({item}: {item: OfferXorCombo | 'see-more'}) {
    return item !== 'see-more' ? (
      <OfferItem containerStyle={style.item} offer={item as OfferXorCombo} />
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
