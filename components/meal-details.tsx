import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

import Meal from "../models/meal";

interface MealDetailsProperties
  extends Pick<Meal, "duration" | "affordability" | "complexity"> {
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProperties) {
  return (
    <View style={[styles.detailsInnerContainer, style]}>
      <Text style={textStyle}>{duration}m</Text>
      <Text style={[styles.textUppercase, textStyle]}>{complexity}</Text>
      <Text style={[styles.textUppercase, textStyle]}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsInnerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  textUppercase: {
    textTransform: "uppercase",
  },
});
