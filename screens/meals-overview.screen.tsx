import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import { RootStackParameterList } from "../app";

type MealsOverviewScreenProperties = NativeStackScreenProps<
  RootStackParameterList,
  "MealsOverview"
>;

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProperties) {
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>This is Category details - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
