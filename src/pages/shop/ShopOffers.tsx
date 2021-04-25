import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BasketSVG from '../../assets/images/icons/slim-shop-basket-icon.svg';
import {IconButton} from '../../components/IconButton';
import {ViewGradient} from '../../components/ViewGradient';
import {OfferList} from '../../containers/shop/OfferList';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {ApplicationDataContext} from '../../contexts/ApplicationData';
import {ShopDrawerContext} from '../../contexts/ShopDrawer';
import {ShopStackParamList} from '../../routes/ShopTabRoutes';
import {colors, fonts} from '../../theme';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  serviceText: {
    marginTop: 30,
    marginLeft: 20,
    fontFamily: fonts.semiBoldFontFamily,
    fontSize: 15,
    color: colors.darkPurple,
  },
  basketButtonContainer: {
    alignItems: 'flex-end',

    width: '100%',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    //backgroundColor: "red"
  },
  basketButton: {
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

type ShopOffersProps = StackScreenProps<ShopStackParamList, 'ShopOffers'>;

export default function ProductList(props: ShopOffersProps) {
  const {route, navigation} = props;
  const {unitStoreFetcher, servicesFetcher} = useContext(
    ApplicationDataContext,
  );
  const {drawerNavigation} = useContext(ShopDrawerContext);

  const unitStore = unitStoreFetcher.data;
  const services = servicesFetcher.data;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Serviços"
        description={unitStore?.name || unitStore?.store.name}
        drawerNavigation={drawerNavigation}
      />

      <OfferList
        offers={services}
        ListHeaderComponent={Header(props)}
        ListFooterComponent={Footer(props)}
        seeMoreItemOnPress={() =>
          navigation.navigate('ShopOffers', route.params)
        }
      />

      <ViewGradient
        gradient={{...colors.WhiteFadeDegrade, end: {x: 2, y: 0.4}}}
        style={style.basketButtonContainer}>
        <IconButton
          gradientProps={{gradient: colors.MainDegrade60White}}
          touchableProps={{
            style: style.basketButton,
            onPress: () => navigation.navigate('ShopBasket', route.params),
          }}
          size={50}>
          <BasketSVG fill={colors.white} width="26" height="26" />
        </IconButton>
      </ViewGradient>
    </SafeAreaView>
  );
}

function Header(props: ShopOffersProps) {
  return <View style={{paddingTop: 10}}></View>;
}

function Footer(props: ShopOffersProps) {
  return <View style={{paddingBottom: 80}}></View>;
}
