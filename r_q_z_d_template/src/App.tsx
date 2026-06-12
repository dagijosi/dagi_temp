import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";
import { ThemeProvider } from "./theme-system";
import { GlobalChunkErrorBoundary } from "./components/ui";


function App() {
  return (
    <ThemeProvider>
      <Toaster richColors />
      <GlobalChunkErrorBoundary>
        <Router>
          <Routes>
            {renderRoutes(routes)}
          </Routes>
        </Router>
      </GlobalChunkErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
