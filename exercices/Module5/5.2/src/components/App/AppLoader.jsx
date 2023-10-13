import { ProviderWrapper as OpinionsContext } from "../../contexts/opinionsContext.jsx";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <OpinionsContext >
        <App />
      </OpinionsContext >
  )
}

export default AppLoader