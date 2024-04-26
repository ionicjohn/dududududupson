import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Frontpage/Frontpage.jsx'
import Footer from './Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
