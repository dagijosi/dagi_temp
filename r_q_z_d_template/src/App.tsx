import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import routes from "./routes/routes";
import { renderRoutes } from "./routes/RouteRenderer";


function App() {
  return (
    <>
      <Toaster richColors />
      <Router>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
