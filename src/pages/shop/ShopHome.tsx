import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardAccount from "../../containers/app/CardAccount";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CardTransaction from '../../containers/shop/CardTransaction';
import { Button } from "react-native-paper";
import { UnitStore } from "../../types/domain/interfaces";
import { ScrollView } from "react-native-gesture-handler";

const style = StyleSheet.create({
    screen: {
        flex: 1
    },
    menu:{
        marginHorizontal: 20,
        marginTop: 10,
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionMenu:{
        flex: 1,
        padding: 10,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    history:{
        flex: 0.5,
        marginHorizontal: 20,
        marginTop: 10,
        padding: 10,
    },
    cardAccount:{
        flex: 0.43
    },
    topView:{
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection:'row',
        marginTop: 50,
        marginHorizontal: 20
    },
    exitView: {
        flex: 1,
        alignItems: "flex-end",
        textAlign: 'right'
    },
    exitButton: {
        borderRadius: 50,   
    },
    exitButtonLabel: {
        color: "#fff",
    },
    textDisplayName: {
        marginHorizontal: 15
    },
})

export default function ShopHome({route, navigation}: any) {
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