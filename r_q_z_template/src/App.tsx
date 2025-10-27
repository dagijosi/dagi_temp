import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";
import Layout from "./layout/Layout";

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
