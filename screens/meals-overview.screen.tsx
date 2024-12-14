import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import { RootStackParameterList } from "../app";
import MealsList from "../components/meals-list/meals-list";
import { CATEGORIES, MEALS } from "../data/dummy-data";

type MealsOverviewScreenProperties = NativeStackScreenProps<
  RootStackParameterList,
  "MealsOverview"
>;

export default function MealsOverviewScreen({
  route,
  navigation,
}: MealsOverviewScreenProperties) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => categoryId === category.id,
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList meals={displayedMeals} />;
}
