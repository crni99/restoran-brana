import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/Footer';
import ContactPage from './pages/Contact';

function App() {
  return (
    <>
      <div className="page-container">
        <Header />
        <div className="container content">
          <div className="row">
            <div className="col-12">
              <Routes>
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;