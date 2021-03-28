import React, {useState, useContext} from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { theme } from "../../theme";
import style from "./Login.style";
import AuthContext from '../../contexts/auth';

import LogoSVG from "../../assets/images/refocus-center-logo.svg";
import GoogleSVG from "../../assets/images/icons/google-icon.svg"

import {widthPercentageToDP as wd, heightPercentageToDP as hg} from "react-native-responsive-screen"

export default function Login() {
  const { handleLogin } = useContext(AuthContext);  
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: ""
  });
  const login = () => {
    handleLogin(credentials);
  }

  return (
      <View style={style.mainView}>
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
          onPress={login}
        >
          Entrar
        </Button>

        <View style={[style.socialMediaView, style.centerView]}>
          <Text style={style.text}>Ou entre com</Text>

          <View style={style.flexView}>
            <GoogleSVG style={style.socialMediaIcon}></GoogleSVG>
          </View>

          <Text style={style.text}>
            Ainda não possui conta? <Text style={style.textBold}>Crie agora</Text>
          </Text>
        </View>
      </View>
  );
}
