import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./pages/Register";
import Navbar from "./components/Navbar";
import RuleBook from "./components/RuleBook";
import MassMail from "./pages/MassMail";
import ConfettiComp from "./pages/ConfettiComp";
import Page from "./pages/Page";
import RegistrationList from "./pages/RegistrationList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/rulebook/:id" element={<RuleBook />} />
        <Route path="/massmail" element={<MassMail />} />
        <Route path="/confetti" element={<ConfettiComp />} />
        <Route path="/registrationList" element={<RegistrationList />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
