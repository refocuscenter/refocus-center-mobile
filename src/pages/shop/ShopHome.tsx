import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ShopProfile from '../../containers/shop/ShopProfile';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CardTransaction from '../../containers/shop/CardTransaction';
import {Button} from 'react-native-paper';
import {UnitStore, UserAccountStore} from '../../types/domain/interfaces';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../theme';
import MaskedView from '@react-native-community/masked-view';
import {ViewGradient} from '../../components/ViewGradient';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconGradient} from '../../components/IconGradient';
import ShopHomeSVG from '../../assets/images/icons/slim-shop-home.svg';
import {StackScreenProps} from '@react-navigation/stack';
import {ShopStackParamList} from '../../routes/ShopTabRoutes';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {OfferList} from '../../containers/shop/OfferList';
import {Text} from '../../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  },
});

type ShopHomeProps = StackScreenProps<ShopStackParamList, 'ShopHome'>;

export default function ShopHome(props: ShopHomeProps) {
  const {route, navigation} = props;
  const {
    unitStore,
    userAccountStore,
    services,
    drawerNavigation,
  } = route.params;

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu unitStore={unitStore} drawerNavigation={drawerNavigation} />

      <OfferList
        offers={services}
        limit={4}
        ListHeaderComponent={Header(props)}
        ListFooterComponent={Footer(props)}
        seeMoreItemOnPress={() =>
          navigation.navigate('ShopOffers', route.params)
        }
      />
    </SafeAreaView>
  );
}

function Header(props: ShopHomeProps) {
  const {route, navigation} = props;
  const {unitStore, userAccountStore, services} = route.params;

  return (
    <View>
      <ShopProfile unitStore={unitStore} userAccountStore={userAccountStore} />
      <Text style={style.serviceText}>Serviços</Text>
    </View>
  );
}

function Footer(props: ShopHomeProps) {
  return <View></View>;
}
