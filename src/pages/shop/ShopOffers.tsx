import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Button, Chip, TextInput} from 'react-native-paper';
import {colors, fonts, paperTheme} from '../../theme';
import {
  Combo,
  Offer,
  OfferXorCombo,
  Product,
  User,
} from '../../types/domain/interfaces';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {produtosMercadinho} from '../../mocks/productsCategories';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hg,
} from 'react-native-responsive-screen';
import {XOR} from '../../types/app/operators';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {ShopStackParamList} from '../../routes/ShopRoutes';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {OfferList} from '../../containers/shop/OfferList';
import ShopProfile from '../../containers/shop/ShopProfile';
import {IconButton} from '../../components/IconButton';
import BasketSVG from '../../assets/images/icons/slim-shop-basket-icon.svg';
import {ViewGradient} from '../../components/ViewGradient';

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
  },
  basketButton: {
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
});

type ShopOffersProps = StackScreenProps<ShopStackParamList, 'ShopOffers'>;

export default function ProductList(props: ShopOffersProps) {
  const {route, navigation} = props;
  const {unitStore, services} = route.params;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Serviços"
        description={unitStore.name || unitStore.store.name}
        unitStore={unitStore}
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
        gradient={colors.WhiteFadeDegrade}
        style={style.basketButtonContainer}>
        <IconButton
          gradientProps={{gradient: colors.MainDegrade60White}}
          touchableProps={{style: style.basketButton}}
          size={50}>
          <BasketSVG fill={colors.white} width="26" height="26" />
        </IconButton>
      </ViewGradient>
    </SafeAreaView>
  );
}

function Header(props: ShopOffersProps) {
  const {route, navigation} = props;
  const {unitStore, services} = route.params;

  return <View style={{paddingTop: 10}}></View>;
}

function Footer(props: ShopOffersProps) {
  return <View style={{paddingBottom: 80}}></View>;
}
