import { StyleSheet, Text, View } from "react-native";

import MealsList from "../components/meals-list/meals-list";
import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../hooks/store-hooks";

export default function FavoritesScreen() {
  // const favoritesContext = useContext(FavoritesContext);
  const favorites = useAppSelector((state) => state.favoriteMeals);

  const favoriteMeals = MEALS.filter((meal) => favorites.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "white",
  },
});
