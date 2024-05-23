import MyText from "./MyText"
import MyInput from "./MyInput"
import MyButton from "./MyButton"
import { Button } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function SignUp() {
  const { setAuthState, setEmail, setPassword, handleSignUp } =
    useContext(AuthContext)
  return (
    <>
      <MyText type="title">Sign Up</MyText>
      <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" onChangeText={setPassword} secureTextEntry />
      <MyButton title="Sign In" onPress={handleSignUp} />
      <Button title="Sign Up" onPress={() => setAuthState("signIn")} />
    </>
  )
}
