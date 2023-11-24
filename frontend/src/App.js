import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./pages/Register";
import Navbar from "./components/Navbar";
import RuleBook from "./components/RuleBook";
const coc = require("../src/assets/docs/Code Of Conduct.pdf");

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/rulebook" element={<RuleBook pdfFile={coc} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
