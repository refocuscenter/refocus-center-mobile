import { StyleSheet } from "react-native";

export default StyleSheet.create({
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