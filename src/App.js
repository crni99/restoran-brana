import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import MenuPage from './pages/Menu';
import DrinksPage from './pages/Drinks';
import PlayroomPage from './pages/Playroom';
import ContactPage from './pages/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  const location = useLocation();

  useEffect(() => {

    AOS.init({ once: true });

    window.scrollTo(0, 0);

    setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jelovnik" element={<MenuPage />} />
        <Route path="/karta-pica" element={<DrinksPage />} />
        <Route path="/igraonica" element={<PlayroomPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
