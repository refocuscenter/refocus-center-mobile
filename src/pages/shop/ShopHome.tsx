import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UseQueryResult} from 'react-query';
import {Text} from '../../components/Text';
import {OfferList} from '../../containers/shop/OfferList';
import ShopProfile from '../../containers/shop/ShopProfile';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {ShopDrawerContext} from '../../contexts/ShopDrawer';
import {StorePagesContext} from '../../contexts/StorePages';
import {ShopStackParamList} from '../../routes/ShopTabRoutes';
import {colors, fonts} from '../../theme';
import {OfferXorCombo} from '../../types/domain/interfaces';

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
  // const {servicesFetcher} = useContext(ApplicationDataContext);
  const {drawerNavigation} = useContext(ShopDrawerContext);
  const {unitStoreOffersQuery} = useContext(StorePagesContext);

  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu drawerNavigation={drawerNavigation} />

      <OfferList
        offers={unitStoreOffersQuery.data}
        limit={4}
        ListHeaderComponent={Header(unitStoreOffersQuery)}
        ListFooterComponent={Footer(props)}
        seeMoreItemOnPress={() =>
          navigation.navigate('ShopOffers', route.params)
        }
      />
    </SafeAreaView>
  );
}

function Header(useUnitStoreOffersQuery: UseQueryResult<OfferXorCombo[]>) {
  return (
    <View>
      <ShopProfile />
      <Text
        style={[
          style.serviceText,
          {display: useUnitStoreOffersQuery.data ? 'flex' : 'none'},
        ]}>
        Serviços
      </Text>
    </View>
  );
}

function Footer(props: ShopHomeProps) {
  return <View></View>;
}
