import React from 'react';
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/Bottom_navbar"
import Footer from '../components/Footer/Footer';
import Career from '../components/careers/Career';
import Contact from '../components/Aboutpage/Contact';
export default function Cart() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Career></Career>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}
