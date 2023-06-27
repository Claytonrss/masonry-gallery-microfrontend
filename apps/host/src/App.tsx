import { MyRoutes } from "./routes";
import { ThemeProvider } from "./context/themeContext";
import { PresentationProvider } from "./context/PresentationContext";

function App() {
  return (
    <ThemeProvider>
      <PresentationProvider>
        <MyRoutes />
      </PresentationProvider>
    </ThemeProvider>
  );
}

export default App;
