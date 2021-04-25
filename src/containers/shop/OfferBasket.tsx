import React from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import {BasketItemComponent} from '../../components/shop/BasketItem';
import {Basket, BasketItem} from '../../types/domain/interfaces';

const style = StyleSheet.create({
  main: {
    marginHorizontal: 10,
  },
  item: {
    margin: 4,
  },
});

export interface OfferBasketProps extends Partial<FlatListProps<BasketItem>> {
  basket?: Basket;
}

export function OfferBasket(props: OfferBasketProps) {
  if (!props.basket) return <View />;

  return (
    <FlatList
      data={props.basket.basketItems}
      keyExtractor={(_, i) => 'basket-item-' + i}
      renderItem={createRenderItem(props)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...props}
      style={[style.main, props.style]}
    />
  );
}

function createRenderItem(props: OfferBasketProps) {
  return function renderItem({item}: {item: BasketItem}) {
    return (
      <BasketItemComponent containerStyle={style.item} basketItem={item} />
    );
  };
}
