import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { RootStackParameterList } from "../app";
import IconButton from "../components/icon-button";
import List from "../components/meal-detail/list";
import Subtitle from "../components/meal-detail/subtitle";
import MealDetails from "../components/meal-details";
import { MEALS } from "../data/dummy-data";
import { useAppDispatch, useAppSelector } from "../hooks/store-hooks";
import { favoriteActions } from "../store/redux/favorites-slice";

type MealsOverviewScreenProperties = NativeStackScreenProps<
  RootStackParameterList,
  "MealDetails"
>;

export default function MealDetailsScreen({
  route,
  navigation,
}: MealsOverviewScreenProperties) {
  const mealId = route.params.mealId;
  // const favoritesContext = useContext(FavoritesContext);
  const favorites = useAppSelector((state) => state.favoriteMeals);
  const dispatch = useAppDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favorites.ids.includes(selectedMeal?.id ?? "");

  useLayoutEffect(() => {
    function changeMealFavoriteHandler() {
      if (mealIsFavorite)
        // favoritesContext.removeFavorite(selectedMeal?.id ?? "");
        dispatch(
          favoriteActions.removeFavorite({ id: selectedMeal?.id ?? "" }),
        );
      else
        // favoritesContext.addFavorite(selectedMeal?.id ?? "");
        dispatch(favoriteActions.addFavorite({ id: selectedMeal?.id ?? "" }));
    }

    navigation.setOptions({
      headerRight: () => (
        <IconButton
          name={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeMealFavoriteHandler}
        />
      ),
    });
  }, [dispatch, mealIsFavorite, navigation, selectedMeal?.id]);

  if (!selectedMeal) return <Text>No Meal found</Text>;

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />

      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    marginHorizontal: "auto",
  },
});
