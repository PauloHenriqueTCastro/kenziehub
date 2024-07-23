import { Routes, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { LandingPage } from "./pages/landing";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
