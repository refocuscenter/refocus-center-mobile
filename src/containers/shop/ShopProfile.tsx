import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CircleImage} from '../../components/CircleImage';
import {Text} from '../../components/Text';
import {StorePagesContext} from '../../contexts/StorePages';
import {colors, fonts} from '../../theme';
import {toBRL} from '../../utils/quotation';

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
  },
  balanceContainer: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 30,
    flex: 1,
    //backgroundColor: 'red',
    //justifyContent: 'center',
  },
  balanceText: {
    fontSize: 14,
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceValue: {
    fontFamily: fonts.mediumFontFamily,
    fontSize: 26,
  },
  eye: {
    marginTop: -5,
  },
});

interface ShopProfileProps {
  // [key: string]: any;
}

export default function ShopProfile(props: ShopProfileProps) {
  const [balance, setBalance] = useState('*********');
  const [showBalance, setShowBalance] = useState(false);

  const {unitStoreQuery, userAccountStoreQuery} = useContext(StorePagesContext);

  const unitStore = unitStoreQuery.data;
  const userAccountStore = userAccountStoreQuery.data;

  function replaceBalance() {
    if (!userAccountStore) return;

    setShowBalance(!showBalance);

    if (showBalance) {
      let cif = '';
      for (let i = 0; i < balance.length; i++) cif += '*';

      setBalance(cif);
    } else {
      setBalance(toBRL(userAccountStore.balance));
    }
  }

  return (
    <View style={style.main}>
      <CircleImage
        hasStatus={false}
        size={130}
        uri={unitStore ? unitStore.store.image : ''}
      />
      <View style={style.balanceContainer}>
        <Text style={style.balanceText}>Seu saldo</Text>
        <View style={style.balance}>
          <Text style={style.balanceValue}>{balance}</Text>
          {eyeIcon(showBalance, replaceBalance)}
        </View>
      </View>
    </View>
  );
}

function eyeIcon(show: boolean, onPress: Function) {
  return show ? (
    <Ionicons
      style={style.eye}
      name="eye-outline"
      color={colors.gray80}
      size={30}
      onPress={() => onPress()}
    />
  ) : (
    <Ionicons
      style={style.eye}
      name="eye-off-outline"
      color={colors.gray80}
      size={30}
      onPress={() => onPress()}
    />
  );
}
