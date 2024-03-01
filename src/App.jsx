import { BrowserRouter } from "react-router-dom";
import RoutesEva from "./routes/RoutesEva";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <RoutesEva />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
