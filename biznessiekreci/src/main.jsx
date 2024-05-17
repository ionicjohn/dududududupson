import React from 'react'
import ReactDOM from 'react-dom/client'
import Frontpage from './Frontpage/Frontpage.jsx'
import ImageSlider from './Frontpage/Slider.jsx'
import './index.css'

const slides = [
  'Slide 1: Welcome to the slider!',
  'Slide 2: This is the second slide.',
  'Slide 3: Here is the third slide.',
  'Slide 4: Finally, the fourth slide.'
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageSlider slides={slides} />
    <Frontpage />
  </React.StrictMode>,
)
