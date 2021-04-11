import React, { useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import { TextInput, Button, Avatar, IconButton } from "react-native-paper"
import { Basket } from "../../types/domain/interfaces";
import { paperTheme } from "../../theme";

const style = StyleSheet.create({
    mainView: {

    },
    inlineView: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    textValue: {
        color: paperTheme.colors.primary,
        fontSize: 16
    },
    productText: {
        fontSize: 15,
        marginBottom: 8
    },
    card: {
        marginVertical: 5,
        backgroundColor: "#fff",
        borderColor: paperTheme.colors.placeholder,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 8,
        paddingBottom: 0
    },
    image: {
        marginRight: 20
    },
    textUnit: {
        fontSize: 18,
        alignSelf: "center",
        marginHorizontal: 5
    },

})

export interface basketProductProps {
    basket?: Basket,
    [key: string]: any
}

export function BasketProductList({ basket }: basketProductProps) {

    return <View style={style.mainView}>
        {basket?.basketItems
            .map((portion, i) => 
                <View key={"basket-product-list-" + i} style={[style.card, style.inlineView]}>
                    <Avatar.Image style={style.image} size={84} source={{ uri: portion.offer.image }} />
                    <View>
                        <Text style={style.productText}>{portion.offer.name}</Text>
                        <Text style={style.textValue}>R$ {(portion.offer.value * portion.amount).toFixed(2)}</Text>
                        
                        <View style={[style.inlineView]}>
                            <IconButton
                                icon="minus"
                                color="rgb(117, 117, 117)"
                                size={30}
                                onPress={() => console.log('Pressed')}
                            />
                            {/*<Icon color={"red"} size={30} name="minus"/>*/}
                            
                            <Text style={style.textUnit}>{portion.amount}</Text>
                            
                            <IconButton
                                icon="plus"
                                color="rgb(117, 117, 117)"
                                size={30}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                    </View>
                </View>)}
    </View>
}