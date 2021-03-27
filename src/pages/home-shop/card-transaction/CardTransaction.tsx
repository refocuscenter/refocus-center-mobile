import React from "react";
import { View, Text } from "react-native";
import style from './CardTransaction.style';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Extract } from "../../../types/interfaces";
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import 'moment/locale/pt-br';

interface CardTransactionProps {
    value: Extract,
    [key: string]: any
}

export default function CardTransaction({value}: CardTransactionProps) {
    return ( 
        <View style={style.content}>
            <View style={style.card}>
                <View style={style.icon}>
                    {
                        value.type == 0 ? 
                            <IconEntypo name="shopping-cart" size={30} color="#1CD69D"/> :
                        value.type == 1 ? 
                            <IconAntDesign name="swap" size={30} color={'#1CD69D'}/> :
                            <IconIonicons name="cash-outline" size={30} color={'#1CD69D'}/>
                    }
                </View>
                <View style={style.cardContent}>
                    <View>
                        <Text style={style.title}>Valor</Text>
                        <Text>R${value.value}</Text>
                    </View>
                    <View>
                        <Text style={style.title}>Compra em</Text>
                        <Text>{moment(value.date).locale('pt-br').format('MMMM D, YYYY')}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}