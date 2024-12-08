import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Meal from "../models/meal";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) {
  return (
    <View>
      <Pressable
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
            <View style={styles.detailsInnerContainer}>
              <Text>{duration}m</Text>
              <Text style={styles.textUppercase}>{complexity}</Text>
              <Text style={styles.textUppercase}>{affordability}</Text>
            </View>
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
  detailsInnerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  textUppercase: {
    textTransform: "uppercase",
  },
});
