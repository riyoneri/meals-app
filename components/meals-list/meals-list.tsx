import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

import Meal from "../../models/meal";
import MealItem from "./meal-item";

interface MealsListProperties {
  meals: Meal[];
}

function renderMealItem(mealData: ListRenderItemInfo<Meal>) {
  return <MealItem {...mealData.item} />;
}

export default function MealsList({ meals }: MealsListProperties) {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
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
