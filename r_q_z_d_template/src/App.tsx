import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";
import { ThemeProvider } from "./theme-system";


function App() {
  return (
    <ThemeProvider>
      <Toaster richColors />
      <Router>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
