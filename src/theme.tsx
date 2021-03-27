import { DefaultTheme } from "react-native-paper";

type PaperTheme = ReactNativePaper.Theme;

export const theme: PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1CD69D", 
    background: "#fff",
    text: "#757575",
    placeholder: "#dddddd"
    /*accent: "red",
    backdrop: "red",
    surface: "red",
    notification: "red",
    onSurface: "red",
    placeholder: "red",
    onBackground: "red",
    disabled: "red",
    error: "red"*/
  }
};
