import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function Subtitle({ children }: PropsWithChildren) {
  return <Text style={styles.subTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
  },
});
