import Navbar from "../components/Navbars/Navbar"
import Bottom_navbar from "../components/Navbars/Bottom_navbar"

import Slider from "../components/Carousels/Slider"

import Mission from "../components/Aboutpage/Mission"

import Journey from "../components/Aboutpage/Journey"

import Stats from "../components/Aboutpage/Stats"

import Contact from "../components/Aboutpage/Contact"

import Map from "../components/Footer/Map";
import Footer from "../components/Footer/Footer"
import AboutHero from "../components/Aboutpage/AboutHero"

import Team from "../components/Aboutpage/Team"


const Home = () => {

  return (
    <>
      <Navbar></Navbar>
      <Bottom_navbar />
      <AboutHero />
      <Mission></Mission>
      <Journey></Journey>
      <Team />
      <Stats></Stats>
      <Contact></Contact>
      <Footer></Footer>
     
     

    </>
  )
}

export default Home









