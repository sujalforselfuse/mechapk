import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider1 from './assets/slider1.jpg'
export default function Slider() {
  return (
    <>
      <Carousel className='w-full' autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showStatus={false} dynamicHeight={false} >
        <div className='flex justify-center items-center overflow-hidden  h-[200px] sm:h-[500px] md:h-[80vh]'>
          <img className='w-full h-full object-cover' src={Slider1} alt='1' />

          {/* <p className="legend">Legend 1</p> */}
          {/* <button className='text-white text-xs absolute right-[1rem] bottom-[1rem] sm:right-[2rem] sm:bottom-[2rem] rounded-full p-2 sm:p-4 bg-[#FF0000]'>
            Book <br /> Service
          </button> */}
        </div>
        {/* <div className='flex justify-center items-center overflow-hidden h-[200px] sm:h-[500px] md:h-[80vh]'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=600" alt='2' />
          
        </div>
        <div className='flex justify-center items-center overflow-hidden h-[200px] sm:h-[500px] md:h-[80vh]'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='3' />
          
        </div> */}
      </Carousel>



    </>
  )
}