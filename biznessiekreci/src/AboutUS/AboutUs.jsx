import { useState } from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <>
      <h1>About US</h1>
      <section id="home">
        <div class="home-left">

        </div>
        <div class="home-right">
            <h2 class="home-heading">KELEKI to MY</h2>
            <p class="home-para">Nasza ekipa KALEKI powstala w ZSL. Czesto imprezujemy i mamy wiele przygod. Dzieki temu sklepowi chcemy podzielic sie z Wami naszymi przygodami i zarobic na nastepne</p>
        </div>
    </section>

    <section id="goal">
        <div class="goal-left">
            <h2>Our Goal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis obcaecati incidunt asperiores,
                mollitia quibusdam velit at itaque sunt, culpa in pariatur quas, temporibus repellendus vitae! Vitae,
                illum asperiores.</p>
            <ul>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
                <li> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, atque!</li>
            </ul>
        </div>
    </section>

    <section id="our-Team">
        <h2>Our Member</h2>
        
    </section>
    </>
  )
}

export default AboutUs