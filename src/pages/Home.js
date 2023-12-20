import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/Bottom_navbar"

import Slider from "../components/Carousels/Slider"

import OurServices from "../components/Homepage/OurServices"
import OurOffers from "../components/Homepage/OurOffers"
import NearbyServiceProviders from "../components/Homepage/NearbyServiceProviders"

import RecentWork from "../components/Homepage/RecentWork"

import Map from "../components/Footer/Map";
import Footer from "../components/Footer/Footer"

import Testimonial from "../components/Homepage/Testimonial"
import Testimonal from "../components/Homepage/Testimonial2"
const Home = () => {

  return (
    <>
      <Navbar></Navbar>
      <BottomNavbar />
      <Slider></Slider>
      <OurServices />
      <OurOffers></OurOffers>
      <NearbyServiceProviders />
      <RecentWork />
      <Testimonial  />
      <Testimonal></Testimonal>
      <Map></Map>
      <Footer></Footer>
     
     

    </>
  )
}

export default Home









