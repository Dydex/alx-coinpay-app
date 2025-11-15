import { ButtonProps } from "@/interfaces";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress, bg, color }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bg }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    alignItems: "center",
    padding: 18,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  },
});
