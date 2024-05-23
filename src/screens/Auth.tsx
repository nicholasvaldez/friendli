import { View } from "react-native"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import ConfirmSignUp from "../components/ConfirmSignUp"
import { useContext } from "react"
import { AuthContext, AuthProvider } from "../context/AuthContext"

export default function Wrapper() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  )
}

function Auth() {
  const { authState } = useContext(AuthContext)
  console.log("authState", authState)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {authState === "signIn" && <SignIn />}
      {authState === "signUp" && <SignUp />}
      {authState === "confirmSignUp" && <ConfirmSignUp />}
    </View>
  )
}
