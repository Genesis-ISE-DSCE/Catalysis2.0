import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./pages/Register";
import Navbar from "./components/Navbar";
import RuleBook from "./components/RuleBook";
import MassMail from "./pages/MassMail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/rulebook/:id" element={<RuleBook />} />
        <Route path="/massmail" element={<MassMail />} />
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
