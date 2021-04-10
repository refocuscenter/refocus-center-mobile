import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {TextInput, Button, Avatar} from 'react-native-paper';
import {BasketProductList} from '../../containers/shop/BasketProductList';
import {colors, paperTheme} from '../../theme';
import {Basket, BasketItem, UnitStore} from '../../types/domain/interfaces';
import {user} from '../../mocks/user';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {StackScreenProps} from '@react-navigation/stack';
import {ShopStackParamList} from '../../routes/ShopRoutes';
import { TextGradient } from '../../components/TextGradient';

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

type ShopBasketProps = StackScreenProps<ShopStackParamList, 'ShopBasket'>;

export default function ShopBasket(props: ShopBasketProps) {
  const {route} = props;
  const unitStore: UnitStore = route.params.unitStore;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Sua Cesta"
        description={unitStore.name || unitStore.store.name}
        unitStore={unitStore}
        titleStyle={{fontSize: 15}}
      />

      <OfferBasket basket={route.params.basket} />
        
    </SafeAreaView>
  );
}

const styleOfferBasket = StyleSheet.create({
  main: {
    marginHorizontal: 10,
  },
  item: {
    margin: 4,
  },
});

interface OfferBasketProps {
  basket: Basket;
}

function OfferBasket(props: OfferBasketProps) {
  return (
    <FlatList
      data={props.basket.basketItems}
      keyExtractor={(_, i) => 'basket-item-' + i}
      style={styleOfferBasket.main}
      renderItem={createRenderItem(props)}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
  
    />
  );
}

function createRenderItem(props: OfferBasketProps) {
  return function renderItem({item}: {item: BasketItem}) {
    return <View>
      <TextGradient>
        {JSON.stringify(item)}
      </TextGradient>
    </View>;
  };
}
