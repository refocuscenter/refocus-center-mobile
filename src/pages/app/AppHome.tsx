import React, {useContext} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AuthContext from '../../contexts/Auth';

const style = StyleSheet.create({
  mainView: {
    marginTop: 45,
    marginHorizontal: 20,
  },
  topView: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  title: {
    fontSize: 17,
    fontWeight: 'normal',
    marginBottom: 10,
  },
});

export interface HomeProps {
  navigation: any;
}

export default function AppHome(props: HomeProps) {
  const {handleLogout} = useContext(AuthContext);
  return (
    <ScrollView
      style={style.mainView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={style.topView}></View>

      <Text style={style.title}>Destaques</Text>

      <Text style={style.title}>Suas Lojas</Text>
    </ScrollView>
  );
}
