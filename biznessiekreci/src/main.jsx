import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Frontpage/Frontpage.jsx'
import Footer from './Footer/Footer.jsx'
import Frontpage from './Frontpage/Frontpage.jsx'
import Navbar from './Navbar/Navbar.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Frontpage />
    <Footer />
  </React.StrictMode>,
)
