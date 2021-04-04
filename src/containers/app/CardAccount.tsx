import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from 'react-native-paper';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { UnitStore, UserAccountStore } from "../../types/domain/interfaces";

const style = StyleSheet.create({
    content:{
        flex: 1
    },
    card: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
        borderColor: '#CCCC',
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        overflow: "hidden"
    },
    avatar: {
    },
    userInfo: {
        flexDirection: 'row'
    },
    userAccountInfo: {
        margin: 10,
        justifyContent: 'center'
    },
    userName:{
        fontSize: 20,
        color: '#717978'
    },
    balanceContent:{
        marginTop: 20
    },
    balance:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    balanceValue:{
        fontSize: 25,
        color: '#717978',
        marginTop: 10,
    },
    eye:{
        marginTop: 10
    }
})

interface CardAccountProps {
    unitStore: UnitStore,
    userAccountStore: UserAccountStore
    [key: string]: any
}

export default function CardAccount({unitStore, userAccountStore}: CardAccountProps) {
    var [balance, setBalance] = useState('R$'+userAccountStore.balance.toString());
    var [showBalance, setshowBalance] = useState(true);
    function replaceBalance() {
        setshowBalance(!showBalance);
        if(showBalance){
            let cif = "";
            for (let i=0; i<balance.length;i++){
                cif += "*"
            }
            setBalance(cif);
        } else {
            setBalance('R$'+userAccountStore.balance.toString());
        }
    }
    return (
        <View style={style.content}>
            <View style={style.card}>
                <View style={style.userInfo}>
                    <Avatar.Image style={style.avatar} size={80} source={{ uri: unitStore.store.image }} />
                    <View style={style.userAccountInfo}>
                        <Text style={style.userName}>{unitStore.store.name}</Text>
                        <Text>Conta: 0001-1</Text>
                    </View>
                </View>
                <View style={style.balanceContent}>
                    <Text>Saldo Disponível</Text>
                    <View style={style.balance}>
                        <Text style={style.balanceValue}>
                            {balance}
                        </Text>
                        <IconAntDesign style={style.eye} name="eye" color='#717978' size={25} onPress={() => {replaceBalance()}}/>
                    </View>
                </View>
            </View>
        </View>
    );
}