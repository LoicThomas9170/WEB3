import { ProviderWrapper as CounterProviderWrapper } from "../../contexts/countersContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <CounterProviderWrapper >
        <App />
 
      </CounterProviderWrapper >
  )
}

export default AppLoader