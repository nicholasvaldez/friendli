import { Amplify } from "aws-amplify"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import awsconfig from "./src/aws-exports"
import { withAuthenticator } from "aws-amplify-react-native"
import SignIn from "./src/components/SignIn"

Amplify.configure(awsconfig)
const App = () => {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
