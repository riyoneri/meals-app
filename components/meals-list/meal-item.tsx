import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RootStackParameterList } from "../../app";
import Meal from "../../models/meal";
import MealDetails from "../meal-details";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParameterList>>();

  function selectMealHandler() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View>
      <Pressable
        onPress={selectMealHandler}
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.pressedCard : undefined,
        ]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <MealDetails
              affordability={affordability}
              complexity={complexity}
              duration={duration}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    gap: 10,
    backgroundColor: "white",
    paddingBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageContainer: {
    maxHeight: 200,
  },
  pressedCard: {
    opacity: 0.52,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 19,
  },
  detailsContainer: {
    gap: 10,
  },
});
