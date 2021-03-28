import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Chip, TextInput } from "react-native-paper";
import { theme } from "../../theme";
import { Product, ProductCategory, User } from "../../types/domain/interfaces";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { produtosMercadinho } from "../../mocks/productsCategories";
import {widthPercentageToDP as wd, heightPercentageToDP as hg} from "react-native-responsive-screen"


const style = StyleSheet.create({
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

interface ProductListProps {
  [key: string]: any;
}

interface ProductItemProps {
  product: Product;
  [key: string]: any;
}

const styleProductItem = StyleSheet.create({
  mainView: {
    width: wd(42.01),
    backgroundColor: "#fff",
    margin: wd(2),
    padding: wd(4),
    borderRadius: 10
  },
  productView: {
    alignItems: "center"
  },
  textProductView: {
    overflow: "hidden",
    height: wd(10),
    justifyContent: "center"
  },
  textProduct: {
    textAlign: "center"
  },
  inlineView: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  bottomView: {
    justifyContent: "space-between",
    marginTop: 10
  },
  valueText: {
    color: theme.colors.primary,
    alignSelf: "center"
  }
})

function ProductItem({ product }: ProductItemProps) {
  return (
    <View style={styleProductItem.mainView}>
      <View style={styleProductItem.productView}>
        <Avatar.Image size={wd(25)} source={{ uri: product.image }} />
      <View style={styleProductItem.textProductView}>
        <Text style={styleProductItem.textProduct}>{product.name}</Text>
      </View>
      </View>      
      <View style={[styleProductItem.bottomView, styleProductItem.inlineView]}>
        <Text style={styleProductItem.valueText}>R$ {product.value}</Text>
        <IconMaterialCommunityIcons size={25} color={theme.colors.primary} name="basket-fill" />
      </View>
    </View>
  );
}

const styleTag = StyleSheet.create({
  tag: {
    marginHorizontal: 5,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#d6d6d6",
  },
  tagText: {
    paddingHorizontal: 10,
    textTransform: "none",
  },
  tagSelected: {
    marginHorizontal: 5,
    borderRadius: 50,
    alignItems: "center",
    borderColor: "#d6d6d6",
  },
  tagTextSelected: {
    color: "#fff",
    paddingHorizontal: 10,
    textTransform: "none",
  },
});

interface TagProps {
  selected?: boolean;
  onPress?: () => void;
  children: any;
  [key: string]: any;
}

export function Tag(props: TagProps) {
  function renderTag() {
    if (props.selected)
      return (
        <Button
          mode="contained"
          style={styleTag.tagSelected}
          labelStyle={styleTag.tagTextSelected}
          onPress={props.onPress}
        >
          {props.children}
        </Button>
      );
    else
      return (
        <Button
          mode="outlined"
          style={styleTag.tag}
          labelStyle={styleTag.tagText}
          onPress={props.onPress}
        >
          {props.children}
        </Button>
      );
  }

  return <View>{renderTag()}</View>;
}

export default function ProductList(props: ProductListProps) {
  
  //Transformar isso aqui em use context ou reducer
  //const user = user;
  const productCategoryList = produtosMercadinho;

  return (
    <View style={style.mainView}>
      <View style={[style.topView, style.inlineView]}>
        <Text style={style.title}>Meus Produtos</Text>
        <Button
          icon="arrow-left"
          style={style.roundButton}
          mode="contained"
          labelStyle={style.textButton}
        >
          <Text>Início</Text>
        </Button>
      </View>

      <TextInput
        placeholderTextColor={theme.colors.text}
        style={style.searchInput}
        mode="outlined"
        placeholder="O que deseja buscar?"
      />

      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[style.tagsContainer, style.inlineView]}>
          {/*fazer um mapping ai*/}
          <Tag selected={true}>Tudo</Tag>
          <Tag>Promoções</Tag>
          <Tag>Bebidas</Tag>
          <Tag>Carnes</Tag>
          <Tag>Cafés, chás e achocolatados</Tag>
        </View>
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={[style.listProductView, style.inlineView]}>
          {productCategoryList
            .map(pc => <ProductItem product={pc.product} />)}
        </View>        
      </ScrollView>
    </View>
  );
}
