import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper"
import { BasketProductList } from "../../containers/shop/BasketProductList";
import { paperTheme } from "../../theme";
import { Basket, UnitStore } from "../../types/domain/interfaces";
import { user } from "../../mocks/user"

const style = StyleSheet.create({
    mainView: {
        marginHorizontal: 15,
        marginTop: 35
    },
    topView: {
        justifyContent: "space-between"
    },
    inlineView: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    textValue: {
        color: paperTheme.colors.primary
    },
    title: {
        fontSize: 18,
        alignSelf: "center"
    },
    roundButton: {
        borderRadius: 50      
    },
    textButton: {
        color: "#fff"
    },
    textInput: {
        marginBottom: 10
    }
})

export interface ShopBasketProps {
    //unitStore: UnitStore,
    route: any,
    [key: string]: any
}

export default function ShopBasket({ route }: ShopBasketProps) {
    const unitStore: UnitStore = route.params.unitStore

    const userAccountInStore = user.userAccountInStore
        .find((account) => account.store.id === unitStore.store.id) 

    return (
        <View style={style.mainView}>
            <View style={[style.topView, style.inlineView]}>
                <Text style={style.title}>Minha Cesta</Text>
                <Button 
                    icon="arrow-left" 
                    style={style.roundButton} 
                    mode="contained"
                    labelStyle={style.textButton} 
                >
                    <Text>Produtos</Text>
                </Button>
            </View>

            <TextInput
                placeholderTextColor={paperTheme.colors.text}
                style={style.textInput}
                mode="outlined"
                placeholder="O que deseja buscar?"
            />

            <ScrollView
                style={{marginBottom: 120}}             
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} 
            >

                <BasketProductList basket={userAccountInStore?.basket} />
            </ScrollView>
        </View>
    );
}