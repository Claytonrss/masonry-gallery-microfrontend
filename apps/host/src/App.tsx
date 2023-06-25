import { MyRoutes } from "./routes";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
