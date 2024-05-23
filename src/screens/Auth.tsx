import * as React from "react"
import { View } from "react-native"
import SignIn from "../components/SignIn"
import { AuthContext, AuthProvider } from "../context/AuthContext"

export default function Wrapper() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  )
}

function Auth() {
  const { authState } = React.useContext(AuthContext)
  console.log("authState", authState)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {authState === "signIn" && <SignIn />}
    </View>
  )
}
