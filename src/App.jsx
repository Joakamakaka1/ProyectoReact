import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductFinalDetailPage from './pages/ProductFinalDetailPage';

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path='/finalProduct' element ={<ProductFinalDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;