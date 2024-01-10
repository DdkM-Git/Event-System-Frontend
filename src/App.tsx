import AppContextProvider from "context";
import { AppRouter } from "router";

function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App;
