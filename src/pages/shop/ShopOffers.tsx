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
});

type ShopOffersProps = StackScreenProps<ShopStackParamList, 'ShopHome'>;

export default function ProductList(props: ShopOffersProps) {
  const {route, navigation} = props;
  const {unitStore, userAccountStore, services} = route.params;

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
    </SafeAreaView>
  );
}

function Header(props: ShopOffersProps) {
  const {route, navigation} = props;
  const {unitStore, userAccountStore, services} = route.params;

  return <View></View>;
}

function Footer(props: ShopOffersProps) {
  return <View></View>;
}
