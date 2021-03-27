import { StyleSheet } from "react-native";

export default StyleSheet.create({
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