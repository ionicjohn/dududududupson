import { useState } from 'react';
import './Footer.css';
import { DiscordLogo, InstagramLogo } from '../assets/LogosSVG';

function Footer() {
  return (
    <div className='footer' id='footerWraper'>
      <div className="container">
        <div className="row">
          <div className="footerColumnWraper">
            <h4>Info</h4>
            <ul>
              <li><a href="aboutUs">AboutUs</a></li>
              <li><a href="404">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footerColumnWraper">
            <h4>Help</h4>
            <ul>
              <li><a href="404">FAQ</a></li>
            </ul>
          </div>
          <div className="footerColumnWraper">
            <h4>Shop</h4>
            <ul>
              <li><a href="404">Will Be Added Soon</a></li>
            </ul>
          </div>
          <div className="footerColumnWraper">
            <h4>Media</h4>
            <div className="social-links">
              <a href="https://discord.com/"><i className="discord"><DiscordLogo /></i></a>
              <a href="https://www.instagram.com/"><i className="instagram"><InstagramLogo /></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
