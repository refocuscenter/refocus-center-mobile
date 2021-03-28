import React, {useState, useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {theme, colors} from '../../theme';
import style from './Login.style';
import AuthContext from '../../contexts/auth';
import {LinearTextGradient} from 'react-native-text-gradient';

import LogoSVG from '../../assets/images/refocus-center-logo.svg';
import GoogleSVG from '../../assets/images/icons/google-icon.svg';

import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hg,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

export default function Login() {
  const {handleLogin} = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const login = () => {
    handleLogin(credentials);
  };

  const {MainDegrade60: md60} = colors;

  return (
    <SafeAreaView>
      <ScrollView style={style.mainView}>
        <LinearTextGradient
          locations={md60.locations}
          colors={md60.colors}
          start={md60.start}
          end={md60.end}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 80}}>Refocus Center</Text>
        </LinearTextGradient>

        <View style={[style.centerView, style.cestouView]}>
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
        <Button
          style={style.button}
          labelStyle={style.buttonLabel}
          mode="contained"
          onPress={login}>
          Entrar
        </Button>
        <View style={[style.socialMediaView, style.centerView]}>
          <Text style={style.text}>Ou entre com</Text>

          <View style={style.flexView}>
            <GoogleSVG style={style.socialMediaIcon}></GoogleSVG>
          </View>

          <Text style={style.text}>
            Ainda não possui conta?{' '}
            <Text style={style.textBold}>Crie agora</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
