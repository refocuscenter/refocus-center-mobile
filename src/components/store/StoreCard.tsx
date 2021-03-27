import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

import { OpeningInterval, UnitStore } from "../../types/interfaces";

import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../theme";

interface StoreCardProps {
  unitStore: UnitStore,
  onPress: () => any
}

const styleStoreCard = StyleSheet.create({
  mainView: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,

    borderColor: theme.colors.placeholder,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  },
  storeImage: {},
  descriptionView: {
    marginHorizontal: 20,
  },
  inlineView: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  statusText: {
    color: theme.colors.primary,
  },
  hourText: {},
  basketIcon: {
    flex: 1,
    textAlign: "right",
  },
});

export function StoreCard(props: StoreCardProps) {
  const { unitStore } = props;

  const now = new Date();
  const todayWeek = now.getDay();
  const todayInterval: OpeningInterval = Object.entries(
    unitStore.openingIntervals
  )[todayWeek][1];

  return (
    <View style={styleStoreCard.mainView} onTouchEnd={props.onPress}>
      <Avatar.Image
        style={styleStoreCard.storeImage}
        size={62}
        source={{
          uri: unitStore.image ? unitStore.image : unitStore.store.image,
        }}
      ></Avatar.Image>
      <View style={styleStoreCard.descriptionView}>
        <Text>{props.unitStore.store.name}</Text>
        <View style={styleStoreCard.inlineView}>
          <Text style={styleStoreCard.statusText}>{"Aberto"}</Text>
          <Text
            style={styleStoreCard.hourText}
          >{` - ${todayInterval.openingHour} às ${todayInterval.closeHour}`}</Text>
        </View>
      </View>

      <IconMaterialCommunityIcons
        style={styleStoreCard.basketIcon}
        size={32}
        name="basket-outline"
        color={theme.colors.primary}
      />
    </View>
  );
}
