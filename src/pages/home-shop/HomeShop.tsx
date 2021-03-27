import React from "react";
import { Text, View } from "react-native";
import CardAccount from "./card-account/CardAccount";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import style from './HomeShop.style';
import CardTransaction from './card-transaction/CardTransaction';
import { Button } from "react-native-paper";
import { UnitStore } from "../../types/interfaces";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeShop({route, navigation}: any) {
    const unitStore: UnitStore  = route.params.unitStore;
    return (
        <View style={style.screen}>
            <View style={style.topView}>
                <Text style={style.textDisplayName}>Loja</Text>
                <View style={style.exitView}>
                    <Button 
                        icon="arrow-left" 
                        style={style.exitButton} 
                        labelStyle={style.exitButtonLabel} 
                        mode="contained"
                        onPress={() => {navigation.navigate('Home')}}>
                        <Text>Outra Loja</Text>
                    </Button>
                </View>
            </View>
            <View style={style.cardAccount}>
                <CardAccount unitStore={unitStore} />
            </View>
            <View style={style.menu}>
                <View style={style.optionMenu}>
                    <IconIonicons name="cash-outline" size={50} color={'#1CD69D'}/>
                    <Text>Pagar</Text>
                </View>
                <View style={style.optionMenu}>
                    <IconAntDesign name="swap" size={50} color={'#1CD69D'}/>
                    <Text>Transferir</Text>
                </View>
                <View style={style.optionMenu}>
                    <IconAntDesign name="profile" size={50} color={'#1CD69D'}/>
                    <Text>Extratos</Text>
                </View>
            </View>
            <View style={style.history}>
                <Text>Últimas Transações</Text>
                <ScrollView>
                {unitStore.history.map((value, i) => <CardTransaction key={"transactions-" + i} value={value}/>)}
                </ScrollView>
            </View>
        </View>
    );
}