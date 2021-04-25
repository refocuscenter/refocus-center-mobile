import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoogleSVG from '../assets/images/icons/google-icon.svg';
import LogoSVG from '../assets/images/refocus-center-logo.svg';
import {ButtonGradient} from '../components/ButtonGradient';
import {TextInputGradient} from '../components/TextInputGradient';
import AuthContext from '../contexts/Auth';
import {colors, fonts} from '../theme';

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
  login: {
    marginTop: 15,
  },
  buttonContent: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  buttonLabel: {
    color: colors.white,
  },
  text: {
    color: colors.black0B,
    fontFamily: fonts.mainFontFamily,
    marginVertical: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  socialMediaView: {
    marginTop: 35,
  },
  socialMediaIcon: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default function Login() {
  const {handleLogin} = useContext(AuthContext);
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
        <TextInputGradient
          placeholder="Seu email ou celular"
          containerStyle={style.textInput}
        />

        <TextInputGradient
          placeholder="Sua senha"
          containerStyle={style.textInput}
          secureTextEntry={true}
        />

        <ButtonGradient style={style.login} onTouchEnd={login}>
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
