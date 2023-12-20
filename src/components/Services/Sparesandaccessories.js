import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import noteContext from '../../context/noteContext';
import { DotSpinner } from '@uiball/loaders'
import trial from './trial.png'
export default function Sparesandaccessories(props) {
    const { service_name } = props;
    const [spares, setSpares] = useState([]);
    const { item, setItem } = useContext(noteContext);
    const [sparesloading, setSparesloading] = useState(true);


    const notify = () => toast("Added to cart", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const cartadd = async (item_id, item_title, item_price) => {
        const response = await fetch(`https://mechback.onrender.com/api/cart/addcart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify({ item_id, item_title, item_price, item_category: "spares", item_count: 1 }),


        });
        const json = await response.json();
        if (json.success) {
            notify();
        }
        else {
            alert("fail");
        }
    }

    const handleaddtocart = async (e, item_id, item_title, item_price) => {
        e.preventDefault();

        if (item.length == 0 || item[0].item_category === "spares") {


            await cartadd(item_id, item_title, item_price);

        }
        else {
            let a = window.confirm("this item is from different services, so removing it will clear all the cart ?")
            if (a) {


                try {
                    const response = await fetch(`https://mechback.onrender.com/api/cart/deleteallcart`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": localStorage.getItem('token')
                        }
                    });

                    const json = await response.json();

                    if (json.success) {
                        /* const newCart = item.filter((item) => { return item._id !== id }); */
                        setItem([]);
                        await cartadd(item_id, item_title, item_price);

                    }
                    else {
                        alert("deletion fail");
                    }

                } catch (error) {
                    console.log(error);
                }

            }

        }


    }

    useEffect(() => {
        fetchSpares();
    }, [])

    const fetchSpares = async () => {
        try {
            console.log(service_name);
            setSparesloading(true);
            let sparesApi = '';
            if (service_name == "spares") {
                sparesApi = 'https://mechback.onrender.com/api/product/getspare';
            }
            else {
                /* accessories api */
                /* Api = 'https://mechback.onrender.com/api/product/getspare'; */
            }
            const response = await fetch(sparesApi, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await response.json();
            if (json.success) {
                setSparesloading(false);
                setSpares(json.spares)
            }
            else {
                setSparesloading(false);
                alert('error')
            }
        } catch (error) {
            console.log(error, 44);
        }
    }

    return (
        <div>
            <div className="bg-[#EBEBEB] text-white">


                <div className='flex flex-col p-4 lg:px-32 gap-4'>
                    <div className='bg-[#FFF] pt-4'>


                        <div className='grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 px-8 gap-4 sm:gap-20'>


                            {sparesloading ? <div className='ml-auto mr-auto'><DotSpinner size={40} speed={0.9} color="red" /></div> :
                                spares.map((item) => {
                                    return (
                                        <>


                                            <div key={item.id} className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                                <div>
                                                    <img className='h-[16rem] w-[15rem]' src={trial} alt="" />
                                                </div>
                                                <div className='mt-2 text-[#000]'>
                                                    {item.spare_name}
                                                </div>
                                                <div className='text-lg font-semibold text-[#000]'>
                                                    Rs {item.spare_price} /-
                                                </div>

                                                <div>
                                                    <button
                                                        onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                        type="button"
                                                        class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                            {/*  <div className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                            <div>
                                                <img className='h-[16rem] w-[15rem]' src='https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                {item.spare_name}
                                            </div>
                                            <div className='text-lg font-semibold'>
                                                Rs {item.spare_price} /-
                                            </div>

                                            <div>
                                                <button
                                                    onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                    type="button"
                                                    class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                        <div className='p-4 flex flex-col items-center bg-[#FCFCFC]' style={{ boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.25)' }}>
                                            <div>
                                                <img className='h-[16rem] w-[15rem]' src='https://th.bing.com/th/id/OIP.E4IJcali_762Oo_vNhhbFgHaEK?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt="" />
                                            </div>
                                            <div className='mt-2'>
                                                {item.spare_name}
                                            </div>
                                            <div className='text-lg font-semibold'>
                                                Rs {item.spare_price} /-
                                            </div>

                                            <div>
                                                <button
                                                    onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)}
                                                    type="button"
                                                    class="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2 text-center mr-3 sm:mr-0 bg-[#F31D32] hover:bg-[#F31D32] "
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div> */}


                                            < ToastContainer />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

{/* <div key={item.id} className='flex  bg-[#000000E8] p-2 md:py-4 md:px-16 justify-start md:justify-between rounded-md'>

<div className='bg-red absolute' style={{ clipPath: "polygon(19% 0, 31% 0, 0 50%, 0 34%)" }}></div>
<div className='flex flex-col'>
    <div className='w-[28vw] 570:w-[20vw] md:w-[15vw]  sm:w-auto'>
        <img className='w-[28vw] 570:w-[20vw] md:w-[15vw] h-28 rounded-lg' src="https://th.bing.com/th/id/OIP._SZM30_l7zXHQ3ShNcMOxQHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" srcset="" />
    </div>

    <div class="hidden md:flex items-center justify-center">
        <svg class="w-8 h-8 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p class="ml-2 text-md font-bold text-gray-100">4.95</p>

    </div>


</div>

<div className='flex flex-col whitespace-nowrap overflow-auto  text-ellipsis justify-evenly px-4 gap-2'>
    <div className='font-bold text-xl'>{item.spare_name}</div>
    <div className='flex gap-4'>
        <div>
            <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
        </div>
        <div className=''>
            {item.spare_vehicle_model}
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
            ₹ {item.spare_price}

        </div>
        •
        <div>
            3 Days
        </div>
    </div>
    <div className='flex justify-center overscroll-none md:hidden'>

        <button type="button" class="text-white bg-[#F31D32]  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Now</button>


    </div>
    
    <div className='hidden md:flex'>
        <div className='font-bold text-md'>Price: </div>
        <div>Rs {item.spare_price}</div>
    </div>
</div>

<div className='hidden  md:flex flex-col text-center justify-evenly'>
    <div className='font-bold'>Delivery In</div>
    <div>3 Days</div>
    <div>
        <button onClick={(event) => handleaddtocart(event, item._id, item.spare_name, item.spare_price)} type="button" class="text-white bg-[#F31D32] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Now</button>

    </div>
</div>

< ToastContainer />
</div> */}