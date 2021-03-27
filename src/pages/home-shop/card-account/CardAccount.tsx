import React, {useState} from "react";
import { View, Text } from "react-native";
import { Avatar } from 'react-native-paper';
import style from './CardAccount.style';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { UnitStore } from "../../../types/interfaces";

interface CardAccountProps {
    unitStore: UnitStore,
    [key: string]: any
}

export default function CardAccount({unitStore}: CardAccountProps) {
    var [balance, setBalance] = useState('R$'+unitStore.balance.toString());
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
            setBalance('R$'+unitStore.balance.toString());
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