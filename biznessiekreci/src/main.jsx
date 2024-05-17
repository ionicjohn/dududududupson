import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Footer from './Footer/Footer.jsx'
import Frontpage from './Frontpage/Frontpage.jsx'
import Navbar from './Navbar/Navbar.jsx';
import './index.css'
import AboutUs from './AboutUS/AboutUs.jsx'
import NoPage from './NoPage/NoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/categories" element={<NoPage />} />
      <Route path="/404" element={<NoPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

