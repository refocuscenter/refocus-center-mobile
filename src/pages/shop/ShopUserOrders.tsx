import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ShopTopMenu} from '../../containers/shop/ShopTopMenu';
import {ShopDrawerRoutesParamList} from '../../routes/ShopDrawerRoutes';
import {colors} from '../../theme';

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

type ShopUserOrdersProps = DrawerScreenProps<
  ShopDrawerRoutesParamList,
  'ShopUserOrders'
>;

export default function ShopUserOrders(props: ShopUserOrdersProps) {
  return (
    <SafeAreaView style={style.main}>
      <ShopTopMenu
        title="Pedidos"
        description={'Meus Pedidos'}
        drawerNavigation={props.navigation}
      />

      <Text>User Orders</Text>
    </SafeAreaView>
  );
}
