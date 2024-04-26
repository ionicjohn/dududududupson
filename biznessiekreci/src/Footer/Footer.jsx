import { useState } from 'react'
import './Footer.css'
import { DiscordLogo,  InstagramLogo } from '../assets/LogosSVG'

function Footer() {
  return (
    <>
      <div className='footer' id='footerWraper'>
        <div class="container">
  	 	<div class="row">
  	 		<div class="footerColumnWraper">
  	 			<h4>O nas</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>Pomoc</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>sklep internetowy</h4>
  	 			<ul>
  	 				<li><a href="#">Kategorie zostana dodane wkrotce</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>Media Spolecznosciowe</h4>
  	 			<div class="social-links">
  	 				<a href="https://discord.com/"><i class="discord"><DiscordLogo /></i></a>
  	 				<a href="https://www.instagram.com/"><i class="instagram"><InstagramLogo /></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	    </div>
        </div>
    </>
  )
}

export default Footer