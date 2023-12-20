import React from 'react';
import mission from './assets/mision.png';
import vision from './assets/vision.png'
export default function Mission() {
    return (
        <div className='bg-white flex flex-col  sxl:flex-row '>
            <div className='bg-[#F31D32]  text-white flex p-9'>
                <div className='flex flex-col mr-4'>
                    <h3 className='text-center underline text-2xl font-bold mb-4'>
                        Mission
                    </h3>
                    <div className='flex sm:hidden my-4'>
                        <img className='w-[50rem]' src={mission} alt="" srcset="" />
                    </div>
                    <p className=' text-justify' style={{fontFamily: 'AR One Sans, sans-serif'}}>
                        At Mech Buddy, our mission is crystal clear: to be the ultimate one-stop solution for all your automotive needs. We are on a relentless journey to simplify the lives of automotive owners, making it as effortless as possible to address every automotive concern.
                    </p>
                </div>
                <div className='hidden sm:flex'>
                    <img className='w-[50rem] sxl:w-[100rem] lg:w-[50rem] ' src={mission} alt="" srcset="" />
                </div>
            </div>
            <div className='bg-[#000515F0]  text-white flex p-9 '>
                <div className='flex flex-col mr-4'>
                    <h3 className='text-center underline text-2xl mb-4 font-bold '>
                        Vision
                    </h3>
                    <div className='flex sm:hidden my-4'>
                        <img className='w-[50rem]' src={vision} alt="" srcset="" />
                    </div>
                    <p className=' text-justify' style={{fontFamily: 'AR One Sans, sans-serif'}}>
                        Our vision is to create a comprehensive platform where automotive enthusiasts can seamlessly tackle a myriad of challenges, be it servicing, maintenance, customization, insurance, or modifications. We're committed to continuously enhancing our platform to empower every automotive owner to solve any automotive-related issue they encounter. At Mech Buddy, we're not just revolutionizing the automotive industry; we're redefining the way you experience it.
                    </p>
                </div>
                <div className='hidden sm:flex'>
                    <img className='w-[50rem] sxl:w-[100rem] lg:w-[50rem]' src={vision} alt="" srcset="" />
                </div>
            </div>




        </div>
    )
}
