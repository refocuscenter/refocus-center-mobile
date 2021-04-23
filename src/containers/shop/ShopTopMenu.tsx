import React, {useState} from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
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
import { DrawerNavigation } from '../../routes/ShopTabRoutes';

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
    fontSize: 16,
  },
  description: {
    marginTop: -5,
    color: colors.gray80,
  },
  search: {
    flex: 1,
    marginRight: 20,
    marginTop: 5,
  },
  leftView: {
    marginRight: 20,
    justifyContent: 'center',
  },
});

interface ShopTopMenuProps {
  drawerNavigation: DrawerNavigation;
  unitStore?: UnitStore;
  title?: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;  
  showSearch?: boolean;
}

export function ShopTopMenu(props: ShopTopMenuProps) {
  const {
    unitStore,
    title,
    description,
    titleStyle,
    showSearch = true,
    drawerNavigation,
  } = props;

  const [showLeftView, setShowLeftView] = useState(true);

  return (
    <View style={style.main}>
      <View style={style.contents}>
        <View
          style={[style.leftView, {display: showLeftView ? 'flex' : 'none'}]}>
          <Text style={[style.title, titleStyle]}>
            {title || unitStore?.store.name}
          </Text>
          <Text style={style.description}>
            {description || unitStore?.store.sector}
          </Text>
        </View>

        {showSearch ? (
          <Search
            onFocus={() => setShowLeftView(false)}
            onBlur={() => setShowLeftView(true)}
            containerStyle={style.search}
            placeholder="O que deseja buscar?"
          />
        ) : (
          <View style={{flex: 1}} />
        )}

        <TouchableOpacity
          style={{display: showLeftView ? 'flex' : 'none'}}
          activeOpacity={actions.activeOpacity}
          onPress={() => drawerNavigation.openDrawer()}>
          <IconGradient
            gradientProps={{gradient: colors.MainDegrade60}}
            gradientSize={{width: 48, height: 48}}>
            <IconIonicons size={48} name="md-menu"></IconIonicons>
          </IconGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setShowLeftView(true);
          }}
          style={{display: !showLeftView ? 'flex' : 'none'}}
          activeOpacity={actions.activeOpacity}>
          <IconGradient
            gradientProps={{gradient: colors.MainDegrade60}}
            gradientSize={{width: 48, height: 48}}>
            <IconIonicons size={48} name="close-outline"></IconIonicons>
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
