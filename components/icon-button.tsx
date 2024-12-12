import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet } from "react-native";

type FontAwesomeIconNames = keyof typeof FontAwesome.glyphMap;

interface IconButtonProperties {
  name: FontAwesomeIconNames;
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
      <FontAwesome name={name} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
});
