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
  	 			<h4>Info</h4>
  	 			<ul>
  	 				<li><a href="aboutUs">about us</a></li>
  	 				<li><a href="404">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>Help</h4>
  	 			<ul>
  	 				<li><a href="404">FAQ</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>Shop</h4>
  	 			<ul>
  	 				<li><a href="404">Will Be Added Soon</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footerColumnWraper">
  	 			<h4>Media</h4>
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