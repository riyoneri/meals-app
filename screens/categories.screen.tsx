import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo, View } from "react-native";

import { RootDrawerParameterList, RootStackParameterList } from "../app";
import CategoryGridTile from "../components/category-grid-tile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

type CategoriesScreenProperties = NativeStackScreenProps<
  RootDrawerParameterList & RootStackParameterList,
  "MealsCategories"
>;

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProperties) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.push("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}
