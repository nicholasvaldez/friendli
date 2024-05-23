import MyText from "./MyText"
import MyInput from "./MyInput"
import MyButton from "./MyButton"
import { Button } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function SignIn() {
  const { setAuthState, setEmail, setPassword, handleSignIn } =
    useContext(AuthContext)
  return (
    <>
      <MyText type="title">Sign In</MyText>
      <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" onChangeText={setPassword} secureTextEntry />
      <MyButton title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={() => setAuthState("signUp")} />
    </>
  )
}
