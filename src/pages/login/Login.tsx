import React, {useState, useContext} from "react";
import { View, Text, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { theme } from "../../theme";
import style from "./Login.style";
import AuthContext from '../../contexts/auth';

const googleIcon = require("../../assets/google-32.png");
const facebookIcon = require("../../assets/facebook-32.png");
const cestouLogo = require("../../assets/cestou-logo.png");

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
          <Image style={{width: hg(45), height: hg(32.38)}} source={cestouLogo} />
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
            <Image style={style.socialMediaIcon} source={googleIcon} />
            <Image style={style.socialMediaIcon} source={facebookIcon} />
          </View>

          <Text style={style.text}>
            Ainda não possui conta? <Text style={style.textBold}>Crie agora</Text>
          </Text>
        </View>
      </View>
  );
}
