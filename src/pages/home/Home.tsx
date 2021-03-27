import React, { useContext } from "react";
import { View, ScrollView, Text } from "react-native";
import { Avatar, Button } from "react-native-paper";

import { user } from "../../mocks/user"
import { unitStores } from "../../mocks/store"
import { highlightScreen } from "../../mocks/highlightScreen"

import { StoreCard } from "../../components/store/StoreCard";
import style from "./Home.style"
import { HighlightCarousel } from "../../components/store/HightlightCarousel";
import AuthContext from "../../contexts/auth";


interface HomeProps {
  navigation: any
}

export default function Home(props: HomeProps) {
  const  { handleLogout }  =  useContext(AuthContext) ;
  //TALVEZ USAR CONTEXTS PARA OS MOCKS

  return (
    <ScrollView 
      style={style.mainView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false} 
    >

      <View style={style.topView}>
        <Avatar.Image size={62} source={{ uri: user.profilePhoto }}></Avatar.Image>
        <Text style={style.textDisplayName}>{user.displayName}</Text>

        <View style={style.exitView}>
          <Button 
            icon="arrow-left" 
            style={style.exitButton} 
            contentStyle={style.exitButtonContent} 
            labelStyle={style.exitButtonLabel} 
            mode="contained"
            onPress={handleLogout}
          >
              {/*<IconMaterialIcons style={style.exitButtonIcon} name="arrow-back" size={16}/>
              <View style={{ width: 16, height: 1 }} />*/}
              <Text>Sair</Text>
          </Button>
        </View>
      </View>
      
      <Text style={style.title}>Destaques</Text>
      
      <HighlightCarousel highlights={highlightScreen} />

      <Text style={style.title}>Suas Lojas</Text>

      {unitStores.map((unitStore, i) => 
         <StoreCard 
            key={'unit-store-' + i} 
            unitStore={unitStore} 
            onPress={() => props.navigation.navigate('HomeShop',
               {unitStore: unitStore})} />)}
     
    </ScrollView>
  );
}
