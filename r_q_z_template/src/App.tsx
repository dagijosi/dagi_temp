import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./routes/Layout"; // Root global layout (navbar, footer, etc.)
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";

function App() {
  return (
    <>
      <Toaster richColors />
      <Router>
        <Routes>
          {/* Root layout wraps all routes */}
          <Route path="/" element={<Layout />}>
            {renderRoutes(routes)}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
