import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {TextInput, Button, Avatar, IconButton} from 'react-native-paper';
import {BasketProductList} from '../../containers/shop/BasketProductList';
import {colors, fonts, paperTheme} from '../../theme';
import {Basket, BasketItem, UnitStore} from '../../types/domain/interfaces';
import {user} from '../../mocks/user';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {StackScreenProps} from '@react-navigation/stack';
import {ShopStackParamList} from '../../routes/ShopTabRoutes';
import {TextGradient} from '../../components/TextGradient';
import {OfferBasket} from '../../containers/shop/OfferBasket';
import {ViewGradient} from '../../components/ViewGradient';
import {ButtonGradient} from '../../components/ButtonGradient';

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flex: 1,
  },
  offerBasket: {},
  startOrderView: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    // backgroundColor: "red",
  },
  button: {
    paddingHorizontal: 25,
    marginVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: fonts.semiBoldFontFamily,
    fontSize: 14,
  },
});

type ShopBasketProps = StackScreenProps<ShopStackParamList, 'ShopBasket'>;

export default function ShopBasket(props: ShopBasketProps) {
  const {route} = props;
  const {unitStore, drawerNavigation} = route.params;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Sua Cesta"
        description={unitStore.name || unitStore.store.name}
        unitStore={unitStore}
        titleStyle={{fontSize: 15}}
        showSearch={false}
        drawerNavigation={drawerNavigation}
      />

      <OfferBasket
        style={style.offerBasket}
        basket={route.params.basket}
        ListFooterComponent={<View style={{height: 60}} />}
      />

      <ViewGradient
        gradient={{...colors.WhiteFadeDegrade, end: {x: 2, y: 0.35}}}
        style={style.startOrderView}>
        <ButtonGradient
          viewGradientProps={{
            gradient: colors.MainDegrade60White,
          }}
          textStyle={style.buttonText}
          containerStyle={style.button}>
          Iniciar Pedido
        </ButtonGradient>
      </ViewGradient>
    </SafeAreaView>
  );
}
