import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export default StyleSheet.create({
  mainView: {
    marginTop: 45,
    marginHorizontal: 20
  },
  topView: {
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection:'row',
    marginBottom: 15
  },
  exitView: {
    flex: 1,
    alignItems: "flex-end",
    textAlign: 'right'
  },
  exitButton: {
    borderRadius: 50,   
  },
  exitButtonContent: {
  },
  exitButtonLabel: {
    color: "#fff",
  },
  exitButtonIcon: {
    color: "#fff",
  },
  textDisplayName: {
    marginHorizontal: 15
  },
  title: {
    fontSize: 17,
    fontWeight: "normal",
    marginBottom: 10
  }
});
