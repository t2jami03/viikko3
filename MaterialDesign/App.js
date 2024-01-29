import Login from "./Screens/Login";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}

