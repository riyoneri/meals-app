import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import { RootStackParameterList } from "../app";
import MealItem from "../components/meal-item";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

type MealsOverviewScreenProperties = NativeStackScreenProps<
  RootStackParameterList,
  "MealsOverview"
>;

function renderMealItem(mealData: ListRenderItemInfo<Meal>) {
  return <MealItem {...mealData.item} />;
}

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProperties) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
