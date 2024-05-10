import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import App from './Frontpage/Frontpage.jsx'
import Footer from './Footer/Footer.jsx'
import Frontpage from './Frontpage/Frontpage.jsx'
import './index.css'
import AboutUs from './AboutUS/AboutUs.jsx'
import NoPage from './NoPage/NoPage.jsx'
import Footer from './Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/404" element={<NoPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

