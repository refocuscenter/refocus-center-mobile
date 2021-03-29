import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { theme, colors, fonts } from '../theme';
import AuthContext from '../contexts/Auth';
import { LinearTextGradient } from 'react-native-text-gradient';

import LogoSVG from '../assets/images/refocus-center-logo.svg';
import GoogleSVG from '../assets/images/icons/google-icon.svg';

import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hg,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { TextGradient } from '../components/TextGradient';
import { ButtonGradient } from '../components/ButtonGradient';

export const style = StyleSheet.create({
  mainView: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  logoView: {
    marginVertical: 30,
  },
  centerView: {
    alignItems: 'center',
  },
  flexView: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textInput: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonContent: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonLabel: {
    color: '#fff',
  },
  text: {
    marginVertical: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  socialMediaView: {
    marginTop: 20,
  },
  socialMediaIcon: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default function Login() {
  const { handleLogin } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const login = () => {
    handleLogin(credentials);
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={style.mainView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={[style.centerView, style.logoView]}>
          <LogoSVG width={hg(45)} height={hg(32.38)}></LogoSVG>
        </View>
        <TextInput
          placeholderTextColor={theme.colors.text}
          style={style.textInput}
          mode="outlined"
          placeholder="Seu email"
        />
        <TextInput
          placeholderTextColor={theme.colors.text}
          style={style.textInput}
          mode="outlined"
          secureTextEntry={true}
          placeholder="Sua senha"
        />

        <ButtonGradient>
          Entrar
        </ButtonGradient>

        <ButtonGradient style={style.button} type="secondary">
          Cadastrar
        </ButtonGradient>

        <View style={[style.socialMediaView, style.centerView]}>
          <Text style={style.text}>Ou entre com</Text>

          <View style={style.flexView}>
            <GoogleSVG style={style.socialMediaIcon}></GoogleSVG>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
