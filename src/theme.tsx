import {DefaultTheme} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

type PaperTheme = ReactNativePaper.Theme;

export const theme: PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1CD69D',
    background: '#fff',
    text: '#757575',
    placeholder: '#dddddd',
    /*accent: "red",
    backdrop: "red",
    surface: "red",
    notification: "red",
    onSurface: "red",
    placeholder: "red",
    onBackground: "red",
    disabled: "red",
    error: "red"*/
  },
};

interface Point {
  x: number;
  y: number;
}

interface Gradient {
  locations: number[];
  colors: string[];
  start: Point;
  end: Point;
}

export const measures = {
  prevalentMargin: 5
}

export const fonts = {
  mainFontFamily: 'Poppins-Regular'
}

export const colors = {
  // mainDegrade100: "linear-gradient(88.78deg, #DA5AFA -34.1%, #3570EC 113.16%)",
  // mainDegrade60: "linear-gradient(88.78deg, rgba(218, 90, 250, 0.6) -34.1%, rgba(53, 112, 236, 0.6) 113.16%)",
  MainDegrade100: {
    locations: [0, 1],
    colors: ['#DA5AFA', '#3570EC'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
  } as Gradient,
  MainDegrade60: {
    locations: [0, 1],
    colors: ['rgba(218, 90, 250, 0.6)', 'rgba(53, 112, 236, 0.6)'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
  } as Gradient,

  lightBlue92: '#92B2F5',
  darkPurple: '#555187',

  black0B: '#0B0E26',
  black2F: '#2F2F2F',
  black41: '#414048',
  black50: '#505664',
  gray80: '#807E90',
  grayC2: '#C2C0D3',
  whiteF2: '#F2F0FF',
  white: '#FFFFFF',

  green1C: '#1CD69D',
  redFF: '#FF9BB3',
};
