import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonGradient} from '../../components/ButtonGradient';
import {ViewGradient} from '../../components/ViewGradient';
import {OfferBasket} from '../../containers/shop/OfferBasket';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {ApplicationDataContext} from '../../contexts/ApplicationData';
import {ShopDrawerContext} from '../../contexts/ShopDrawer';
import {ShopStackParamList} from '../../routes/ShopTabRoutes';
import {colors, fonts} from '../../theme';

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
  const {unitStoreFetcher, basketFetcher} = useContext(ApplicationDataContext);
  const {drawerNavigation} = useContext(ShopDrawerContext);

  const unitStore = unitStoreFetcher.data;
  const basket = basketFetcher.data;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Sua Cesta"
        description={unitStore?.name || unitStore?.store.name}
        titleStyle={{fontSize: 15}}
        showSearch={false}
        drawerNavigation={drawerNavigation}
      />

      <OfferBasket
        style={style.offerBasket}
        basket={basket}
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
