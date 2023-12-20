import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders';
import provider1 from './assets/vendor (1).jpg';
import provider2 from './assets/vendor (2).jpg';
import provider3 from './assets/vendor (3).jpg';
import provider4 from './assets/vendor (4).jpg';
import provider5 from './assets/vendor (5).jpg';
import provider6 from './assets/vendor (6).jpg';
import provider7 from './assets/vendor (7).jpg';
import provider8 from './assets/vendor (8).jpg';
import provider9 from './assets/vendor (9).jpg';
import provider10 from './assets/vendor (10).jpg';
import provider11 from './assets/vendor (11).jpg';
import provider12 from './assets/vendor (12).jpg';
import provider13 from './assets/vendor (13).jpg';
import provider14 from './assets/vendor (14).jpg';
import provider15 from './assets/vendor (15).jpg';
import provider16 from './assets/vendor (16).jpg';
import provider17 from './assets/vendor (17).jpg';
import provider18 from './assets/vendor (18).jpg';
import provider19 from './assets/vendor (19).jpg';
import provider20 from './assets/vendor (20).jpg';

export default function Serviceproviders() {

    const [vendor, setVendor] = useState([])
    const [loading,setLoading]=useState(false);

    const image_list=[provider1,provider2,provider3,provider4,provider5,provider6,provider7,provider8,provider9,provider10,provider11,provider12,provider13,provider14,provider15,provider16,provider17,provider18,provider19,provider20]
    useEffect(() => {
        fetchSpares();
    }, [])

    const fetchSpares = async () => {
        try {

            setLoading(true);
            let serviceApi = 'https://mechback.onrender.com/api/auth/getvendor';

            const response = await fetch(serviceApi, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (json.success) {
                
                setLoading(false);

                setVendor(json.vendors)
            }
            else {
                setLoading(false);
                alert('error')
            }
        } catch (error) {
            
        }
    }

    return (
        <div>
            <div className="bg-[#EBEBEB] text-white">
                <h1 className="text-black  text-3xl font-bold  mb-10 py-2 px-2">
                    Service Providers
                </h1>
                {/* list of cards */}
                <div className='flex  flex-col p-4 lg:px-32 gap-4'>
                    {/* single card */}

                    {   loading?<div className='ml-auto mr-auto'><DotSpinner  size={40} speed={0.9} color="red"/></div>:
                    vendor.map((item,index) => {
                        let linku = `/vendor?vendor_id=${item._id}`;
                        return (
                            <div className='flex  bg-[#000000E8] p-2 md:py-4 md:px-16 justify-start md:justify-between rounded-md'>
                                {/* image and rating */}
                                <div className='bg-red absolute' style={{ clipPath: "polygon(19% 0, 31% 0, 0 50%, 0 34%)" }}></div>
                                <div className='flex flex-col'>
                                    <div className='w-[28vw] 570:w-[20vw] md:w-[15vw]  sm:w-auto'>
                                        <img className='w-[28vw] 570:w-[20vw] md:w-[15vw] h-28 rounded-lg object-cover' src={image_list[index%20]} alt="" srcset="" />
                                    </div>

                                    <div class="hidden md:flex items-center justify-center">
                                        <svg class="w-8 h-8 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p class="ml-2 text-md font-bold text-white">4.95</p>

                                    </div>


                                </div>
                                {/* name address */}
                                <div className='flex flex-col whitespace-nowrap overflow-auto  text-ellipsis justify-evenly px-4 gap-2'>
                                    <div className='font-bold text-xl'>{item.shop_name}</div>
                                    <div className='flex gap-4'>
                                        <div>
                                            <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                        </div>
                                        <div className=''>
                                            {item.shop_address}
                                        </div>

                                    </div>
                                    <div className='flex md:hidden justify-evenly'>
                                        <div className='flex'>
                                            <svg class="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <p>4.2</p>
                                        </div>
                                        •
                                        <div>
                                            ₹ {item.vendor_average_price}

                                        </div>
                                        •
                                        <div>
                                            1.5 Kms
                                        </div>
                                    </div>
                                    <div className='flex justify-center overscroll-none md:hidden'>

                                        <Link to={linku} type="button" class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Now</Link>


                                    </div>
                                    {/* price */}
                                    <div className='hidden md:flex'>
                                        <div className='font-bold text-md'>Price: </div>
                                        <div>Rs {item.vendor_average_price}</div>
                                    </div>
                                </div>
                                {/* Distance */}
                                <div className='hidden  md:flex flex-col text-center justify-evenly'>
                                    <div className='font-bold'>Nearby Distance</div>
                                    <div>1.5 Kms</div>
                                    <div>
                                        <Link to={linku} type="button" class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Now</Link>

                                    </div>
                                </div>

                            </div>
                        )
                    })}




                    {/* card end */}




                </div>
            </div>
        </div>
    )
}

