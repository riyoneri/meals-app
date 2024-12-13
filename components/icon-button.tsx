import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type IoniconsIconNames = keyof typeof Ionicons.glyphMap;

interface IconButtonProperties {
  name: IoniconsIconNames;
  color: string;
  onPress: () => void;
}

export default function IconButton({
  name,
  color,
  onPress,
}: IconButtonProperties) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
