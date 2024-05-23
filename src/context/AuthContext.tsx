import { Auth } from "aws-amplify"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"

interface AuthContextType {
  authState: string
  setAuthState: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  verificationCode: string
  setVerificationCode: Dispatch<SetStateAction<string>>
  isLoading: boolean
  handleSignIn: () => void
  handleSignUp: () => void
  handleConfirmSignUp: () => void
}

const AuthContext = createContext<AuthContextType>({
  authState: "signIn",
  setAuthState: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  verificationCode: "",
  setVerificationCode: () => {},
  isLoading: false,
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleConfirmSignUp: () => {},
})

const { Provider } = AuthContext

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState("signIn")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSignIn() {
    if (!email || !password) {
      alert("Please enter an email and password")
      return
    }
    try {
      setIsLoading(true)
      const user = await Auth.signIn({
        username: email,
        password,
      })
      console.log("user", user)
      setAuthState("signedIn")
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
        console.log(error)
      } else {
        alert("An unknown error occurred.")
      }
      setIsLoading(false)
    }
  }

  async function handleSignUp() {
    if (!email || !password) {
      alert("Please enter an email and password")
      return
    }
    try {
      setIsLoading(true)
      await Auth.signUp({
        username: email,
        password,
      })
      setAuthState("confirmSignUp")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error instanceof Error) {
        alert(error.message)
        console.log(error)
      } else {
        alert("An unknown error occurred.")
        console.log("An unknown error occurred:", error)
      }
    }
  }

  async function handleConfirmSignUp() {
    if (!verificationCode) {
      alert("Please enter verification code")
      return
    }
    try {
      setIsLoading(true)
      await Auth.confirmSignUp(email, verificationCode)
      alert("Confirmed. You can now sign in.")
      setAuthState("signIn")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error instanceof Error) {
        alert(error.message)
        console.log(error)
      } else {
        alert("An unknown error occurred.")
        console.log("An unknown error occurred:", error)
      }
    }
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        handleSignUp,
        handleConfirmSignUp,
        verificationCode,
        setVerificationCode,
        isLoading,
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
