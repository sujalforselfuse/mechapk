import React from 'react';
import Navbar from "../components/Navbars/Navbar"
import BottomNavbar from "../components/Navbars/Bottom_navbar"

import Footer from '../components/Footer/Footer';
import Cartitem from '../components/Cart/Cartitem';

export default function Cart() {
    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar />
            <Cartitem ></Cartitem>


            
            <Footer></Footer>
        </>
    )
}
