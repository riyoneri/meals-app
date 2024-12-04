import { FlatList, ListRenderItemInfo, View } from "react-native";

import CategoryGridTile from "../components/category-grid-tile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
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
