import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShopProfile from '../../containers/shop/ShopProfile';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CardTransaction from '../../containers/shop/CardTransaction';
import {Button} from 'react-native-paper';
import {UnitStore, UserAccountStore} from '../../types/domain/interfaces';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../theme';
import MaskedView from '@react-native-community/masked-view';
import {ViewGradient} from '../../components/ViewGradient';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconGradient} from '../../components/IconGradient';
import ShopHomeSVG from '../../assets/images/icons/slim-shop-home.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {ShopStackParamList} from '../../routes/ShopRoutes';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {OfferList} from '../../containers/shop/OfferList';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  offers: {
    marginTop: 30
  }
});

type ShopHomeProps = StackScreenProps<ShopStackParamList, 'ShopHome'>;

export default function ShopHome({route, navigation}: ShopHomeProps) {
  const {unitStore, userAccountStore, services} = route.params;

  return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ShopTopMenu unitStore={unitStore} />

        <ShopProfile
          unitStore={unitStore}
          userAccountStore={userAccountStore}
        />

        <OfferList style={style.offers} offers={services} />
      </ScrollView>
    </SafeAreaView>
  );
}
