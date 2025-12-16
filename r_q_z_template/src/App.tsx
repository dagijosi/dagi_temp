import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./theme-system";

function App() {
  return (
    <>
      <Toaster richColors />
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Root layout wraps all routes */}
            <Route path="/" element={<Layout />}>
              {renderRoutes(routes)}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
