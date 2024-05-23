import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/colors"

interface ButtonProps {
  title: string
  onPress: () => void
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: "bold",
  },
})
