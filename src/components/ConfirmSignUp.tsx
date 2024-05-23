import MyText from "./MyText"
import MyInput from "./MyInput"
import MyButton from "./MyButton"
import { Button } from "react-native"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function ConfirmSignUp() {
  const {
    email,
    setVerificationCode,
    setAuthState,
    setEmail,
    handleConfirmSignUp,
  } = useContext(AuthContext)
  return (
    <>
      <MyText type="title">Confirm Sign Up</MyText>
      <MyInput label="Email" value={email} onChangeText={setEmail} />
      <MyInput label="Code" onChangeText={setVerificationCode} />
      <MyButton title="Confirm" onPress={handleConfirmSignUp} />
      <Button title="Re-send Code" onPress={() => setAuthState("signIn")} />
    </>
  )
}
