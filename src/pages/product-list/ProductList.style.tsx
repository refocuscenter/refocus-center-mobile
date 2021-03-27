import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export default StyleSheet.create({
    inlineView: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    mainView: {
        marginTop: 40,
        marginHorizontal: 15
    },
    topView: {
        justifyContent: "space-between"
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
    searchInput: {
        marginTop: 10
    },
    tagsContainer: {
        marginVertical: 10,
        marginBottom: 15
    },
    listProductView: {
        marginBottom: 190
    }
})