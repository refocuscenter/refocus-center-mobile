import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {IconGradient} from '../../components/IconGradient';
import {Text} from '../../components/Text';
import {UnitStore} from '../../types/domain/interfaces';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {actions, colors, fonts} from '../../theme';
import {TextInput} from 'react-native';

const style = StyleSheet.create({
  main: {
    borderBottomColor: colors.whiteF2,
    borderBottomWidth: 1,
  },
  contents: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.mediumFontFamily,
    fontSize: 20,
  },
  sector: {
    marginTop: -5,
    color: colors.gray80,
  },
  search: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 5
  },
});

interface ShopTopMenuProps {
  unitStore: UnitStore;
}

export function ShopTopMenu(props: ShopTopMenuProps) {
  const {unitStore} = props;

  return (
    <View style={style.main}>
      <View style={style.contents}>
        <View>
          <Text style={style.title}>{unitStore.store.name}</Text>
          <Text style={style.sector}>{unitStore.store.sector}</Text>
        </View>

        <Search
          containerStyle={style.search}
          placeholder="O que deseja buscar?"
        />

        <TouchableOpacity activeOpacity={actions.activeOpacity}>
          <IconGradient
            gradientProps={{gradient: colors.MainDegrade60}}
            gradientSize={{width: 48, height: 48}}>
            <IconIonicons size={48} name="md-menu"></IconIonicons>
          </IconGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSearch = StyleSheet.create({
  textInput: {
    fontFamily: fonts.mainFontFamily,
    fontSize: 15,
  },
});

interface SearchProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export function Search(props: SearchProps) {
  return (
    <View style={[props.containerStyle]}>
      <TextInput
        style={styleSearch.textInput}
        placeholderTextColor={colors.grayC2}
        {...props}></TextInput>
    </View>
  );
}
