import { BrowserRouter } from "react-router-dom";
import PortfolioRouter from "./routes";
import { ConfigAppProvider } from "./portfolio/state/configApp/configAppContext";
import { LangProvider } from "./portfolio/state/lang/langContext";

function App() {
  return (
    <BrowserRouter>
      <ConfigAppProvider>
        <LangProvider>
          <PortfolioRouter />
        </LangProvider>
      </ConfigAppProvider>

    </BrowserRouter>
  );
}

export default App;
