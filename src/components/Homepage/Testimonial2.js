import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from 'react-icons/bi'
import Ashish from './assets/Ashish.jpeg';
import Keshav from './assets/keshav.jpg';
import Lalit from './assets/lalit.jpg';
const Testimonal = () => {
    return (
        <div id='testimonal' className="hidden sm:flex flex-col items-center justify-center mb-8 relative ">

            <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#FFFFFF] text-2xl font-bold	 " >
                OUR SERVICES
            </h1>

            <div className='w-[100%] h-[50%] bg-black blur-[4rem]  absolute'></div>

            <div className="relative w-full sm:max-w-[1160px] xl:max-w-none mx-auto bg-transparent">

                {/* Laptop */}

                <Carousel
                    className='hidden lg:block'
                    // autoPlay={true}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={33}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    transitionTime={1500}
                    emulateTouch={true}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute 2xl:right-[220px] right-[160px] bottom-0 2xl:bottom-[25px] w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="2xl:text-6xl text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[100px] 2xl:right-[160px] 2xl:bottom-[25px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 2xl:text-6xl text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                >

                    <div class="p-4 w-full">

                        <div class="lg:h-[28rem] xl:h-[24.5rem] 2xl:h-[32.5rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#FF0000] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src={Lalit} alt='' className='aspect-square h-28' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Lalit Mali</p>
                                    <p className='text-[#9A9A9A] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Indore</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm xl:text-base 2xl:text-[1.75rem] 2xl:leading-[2.5rem] mb-3 text-[#989898] text-start">Found a wide range of two-wheeler services on the same platform with the best deals.</p>

                        </div>

                    </div>

                    <div class="p-4 w-full">

                        <div class="lg:h-[28rem] xl:h-[24.5rem] 2xl:h-[32.5rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#21DAFF] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src={Keshav} alt='' className='aspect-square h-28' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Keshav Sundaram</p>
                                   
                                    <p className='text-[#9A9A9A] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Jabalpur</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm xl:text-base 2xl:text-[1.75rem] 2xl:leading-[2.5rem] mb-3 text-[#989898] text-start">Amazing customization work done by mech-buddy at best price . Best quality parts used by the vendor . Completely satisfied by the work. </p>

                        </div>

                    </div>

                    <div class="p-4 w-full">

                        <div class="lg:h-[28rem] xl:h-[24.5rem] 2xl:h-[32.5rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src={Ashish} alt='' className='aspect-square h-28' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Ashish Gehlot</p>
                                    <p className='text-[#9A9A9A] 2xl:text-[1.75rem] 2xl:leading-[2.5rem] text-sm'>Indore</p>
                                </div>
                            </div>

                            <p class="leading-[27px]  text-sm xl:text-base 2xl:text-[1.75rem] 2xl:leading-[2.5rem] mb-3 text-[#989898] text-start">I have been really amazed at the work done by Mech-buddy. They converted my Activa 3g into an electrical vehicle. They take a very reasonable amount to make this change in my vehicle. I really appreciate the work.</p>

                        </div>

                    </div>

                   

                </Carousel>

                {/* Tablet */}

                <Carousel
                    className='sm:block hidden lg:hidden'
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    transitionTime={1500}
                    emulateTouch={true}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[80px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[30px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                >
                    <div className='flex'>

                        <div class="p-4 w-1/2">

                            <div class="sm:h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#FF0000] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                                <div className="flex justify-center items-center gap-x-8">

                                    <div>

                                        <img src={Ashish} alt='' className='aspect-square h-28' />

                                    </div>

                                    <div className="flex flex-col items-start">
                                        <p className='text-[#FFFFFF] text-sm'>Ashish Gehlot</p>
                                        
                                        <p className='text-[#9A9A9A] text-sm'>Indore</p>
                                    </div>
                                </div>

                                <p class="leading-[27px] text-sm mb-3 text-[#989898] text-start">I have been really amazed at the work done by Mech-buddy. They converted my Activa 3g into an electrical vehicle. They take a very reasonable amount to make this change in my vehicle. I really appreciate the work.</p>

                            </div>

                        </div>

                        <div class="p-4 w-1/2">

                            <div class="sm:h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#FF0000] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                                <div className="flex justify-center items-center gap-x-8">

                                    <div>

                                        <img src={Lalit} alt='' className='aspect-square h-28' />

                                    </div>

                                    <div className="flex flex-col items-start">
                                        <p className='text-[#FFFFFF] text-sm'>Lalit Mali</p>
                                        
                                        <p className='text-[#9A9A9A] text-sm'>Indore</p>
                                    </div>
                                </div>

                                <p class="leading-[27px] text-sm mb-3 text-[#989898] text-start">Found a wide range of two-wheeler services on the same platform with the best deals.</p>

                            </div>

                        </div>

                    </div>

                    <div className='flex'>

                        <div class="p-4 w-1/2">

                            <div class="sm:h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                                <div className="flex justify-center items-center gap-x-8">

                                    <div>

                                        <img src={Keshav} alt='' className='aspect-square h-28' />

                                    </div>

                                    <div className="flex flex-col items-start">
                                        <p className='text-[#FFFFFF] text-sm'>Keshav Sundaram</p>
                                        
                                        <p className='text-[#9A9A9A] text-sm'>Jabalpur</p>
                                    </div>
                                </div>

                                <p class="leading-[27px] text-sm xl:text-base mb-3 text-[#989898] text-start">Amazing customization work done by mech-buddy at best price . Best quality parts used by the vendor . Completely satisfied by the work.</p>

                            </div>

                        </div>

                    </div>

                </Carousel>

                {/* Mobile */}

                <Carousel
                    className='block sm:hidden'
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={100}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    transitionTime={1000}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[80px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[30px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#FFFFFF] font-bold" />
                        </div>
                    )}

                >

                    <div class="p-4 w-full">

                        <div class="h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src='logo (2).svg' alt='' className='w-[35px] h-[45px]' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] text-sm'>Nitesh Deshmukh</p>
                                    <p className='text-[#9A9A9A] text-sm'>Brainlytics pvt ltd.</p>
                                    <p className='text-[#9A9A9A] text-sm'>Raipur, Chattisgarh</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm mb-3 text-[#989898] text-start">Zorway exceeded expectations! Their user-friendly app, crafted by a skilled development team, and the amazing user experience designed by UI/UX experts impressed us. We wholeheartedly recommend Zorway for their diverse digital services and as a reputable, knowledgeable digital solutions provider.</p>

                        </div>

                    </div>

                    <div class="p-4 w-full">

                        <div class="h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src='logo (6).svg' alt='' className='aspect-square h-28' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] text-sm'>Shubam prajapati</p>
                                    <p className='text-[#9A9A9A] text-sm'>Innovative Scripts</p>
                                    <p className='text-[#9A9A9A] text-sm'>New Delhi</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm mb-3 text-[#989898] text-start">Working with Zorway for our client&apos;s website was a game-changer .Zorway&apos;s proficiency in web development and commitment to comprehending the objectives of our client were exceptional. Our client was delighted with the outcome of the website they produced, which exceeded expectations.</p>

                        </div>

                    </div>

                    <div class="p-4 w-full">

                        <div class="h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src='logo (4).svg' alt='' className='w-[35px] h-[60px]' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] text-sm'>Swamy</p>
                                    <p className='text-[#9A9A9A] text-sm'>Hanuman Travels</p>
                                    <p className='text-[#9A9A9A] text-sm'>Hyderabad, Telangana.</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm xl:text-base mb-3 text-[#989898] text-start">Zorway&apos;s quick launch of our website with seamless integration of Google Ads was simply outstanding! Their team&apos;s efficiency and expertise ensured a rapid setup that perfectly complemented our digital marketing strategy. We were thrilled with the results and highly recommend Zorway for their exceptional service and skillful integration of advertising solutions.</p>

                        </div>

                    </div>

                    <div class="p-4 w-full">

                        <div class="h-[25rem] bg-transparent bg-opacity-75 px-4 pt-12 pb-6 border-2 border-[#0ACF83] rounded-[16px] overflow-hidden relative flex flex-col gap-y-8">

                            <div className="flex justify-center items-center gap-x-8">

                                <div>

                                    <img src='logo (8).svg' alt='' className='w-[35px] h-[60px]' />

                                </div>

                                <div className="flex flex-col items-start">
                                    <p className='text-[#FFFFFF] text-sm'>Dr. Dheeraj Agarwal</p>
                                    <p className='text-[#9A9A9A] text-sm'>NIT- Bhopal</p>
                                    <p className='text-[#9A9A9A] text-sm'>Bhopal, M.P.</p>
                                </div>
                            </div>

                            <p class="leading-[27px] text-sm mb-3 text-[#989898] text-start">Zorway understood our exact requirements and provided a great web platform for us. The outcomes of the service precisely cater to the needs of our institution and contribute to its greater development. Working with Zorway was seamless, and I&apos;m quite pleased with how well they did their Work.</p>

                        </div>

                    </div>

                </Carousel>

            </div>

        </div>
    )
}

export default Testimonal