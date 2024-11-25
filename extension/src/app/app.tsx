// import { HomePage } from "@/pages/home.page";
import { AppProvider } from "./app-providers";
import { AppRouter } from "./app-router";

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
