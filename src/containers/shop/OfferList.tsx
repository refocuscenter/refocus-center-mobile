import React, {useEffect, useState} from 'react';
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
import {useBasketItem, useCreateBasketItem} from '../../hooks/basket';
import {BasketItem, OfferXorCombo} from '../../types/domain/interfaces';

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

function createItems(props: OfferListProps): (OfferXorCombo | 'see-more')[] {
  const {offers, limit} = props;

  if (!offers) return [];

  return limitItems(offers, limit).map((o, i, arr) =>
    limit && i == limit - 1 ? 'see-more' : o,
  );
}

function createRenderItem(props: OfferListProps) {
  const {seeMoreItemOnPress} = props;

  function Item({item}: {item: OfferXorCombo | 'see-more'}) {
    const offer = item as OfferXorCombo;

    const {data, isSuccess} = useBasketItem(1, offer.id);

    const amountState = useState(0);
    const [_, setAmount] = amountState;

    const {mutate} = useCreateBasketItem(1);

    useEffect(() => {
      if (isSuccess) {
        setAmount(data ? data.portion.amount : 0);
      }
    }, [data]);

    function insert(setAmount: Function) {
      const basketItem: BasketItem = {
        portion: {amount: 1, offer: offer},
      };

      mutate(basketItem);
    }

    return item !== 'see-more' ? (
      <OfferItem
        containerStyle={style.item}
        offer={item as OfferXorCombo}
        onIncreaseAmount={insert}
        onDecreaseAmount={() => console.warn('D')}
        amountState={amountState}
      />
    ) : (
      <BlankItem onPress={seeMoreItemOnPress} containerStyle={style.item}>
        Ver mais
      </BlankItem>
    );
  }

  return ({item}: {item: OfferXorCombo | 'see-more'}) => (
    <Item item={item}></Item>
  );
}

function limitItems(items: any[], limit?: number) {
  if (limit !== undefined) return items.slice(0, limit);
  else return items;
}
