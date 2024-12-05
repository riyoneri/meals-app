import { StyleSheet, Text, View } from "react-native";

export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Category details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
