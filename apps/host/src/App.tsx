import { MyRoutes } from "@/routes";
import { PresentationProvider } from "@/context/PresentationContext";
import { ThemeProvider } from "@/context/themeContext";

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
