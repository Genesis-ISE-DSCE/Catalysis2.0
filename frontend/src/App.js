import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
<<<<<<< HEAD
<<<<<<< HEAD
import Contact from './components/Contact';
import About from './components/About';
import Events from './components/Events';


=======
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
=======
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path="/events" element={<Events />}/>
=======
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
=======
>>>>>>> 8ddfa1eca38b0ea60cd09347cd515857900ab024
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
