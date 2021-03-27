import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content:{
        flex: 1
    },
    card: {
        flex: 1,
        marginTop: 20,
        borderColor: '#CCCC',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row'
    },
    icon:{
        marginRight: 20,
        marginLeft: 10,
        justifyContent: 'center'
    },
    cardContent:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 12
    }
})