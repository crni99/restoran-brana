import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/Footer';
import ContactPage from './pages/Contact';
import MenuPage from './pages/Menu';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlayroomPage from './pages/Playroom';
import HomePage from './pages/Home';

AOS.init();

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jelovnik" element={<MenuPage />} />
          <Route path="/igraonica" element={<PlayroomPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;