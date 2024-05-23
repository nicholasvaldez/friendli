import { TextInput, Text, View, StyleSheet } from "react-native"
import { Colors } from "../../constants/colors"
import { Dispatch, SetStateAction } from "react"

interface InputProps {
  label: string
  value?: string
  onChangeText: Dispatch<SetStateAction<string>>
  secureTextEntry?: any
}

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
})
