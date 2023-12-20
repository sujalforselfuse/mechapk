import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from './assets/serviceprovider.jpg';
//  ==============  img

import SPDEMO from "./assets/SPDEMO.jpg";

const ServiceProviders = () => {
  const [vendorlist, setVendorlist] = useState([])
  const [loading, setLoading] = useState(false);

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

        setVendorlist(json.vendors)
      }
      else {
        setLoading(false);
        alert('error')
      }
    } catch (error) {
      console.log(error, 44);
    }
  }

  useEffect(() => {
    fetchSpares();
  }, [])

  return (
    <section className="pb-10 bg-nearbyserviceprovidersbg bg-cover bg-top flex flex-col	 justify-center items-center align-middle ">


      <h1 className="flex justify-center text-[#F31D32] items-center w-full  h-12 text-center mb-8 bg-[#FFFFFF] text-2xl font-bold	 " >
        NEARBY SERVICE PROVIDERS
      </h1>


      <div >
        <div className="flex gap-8 overflow-x-auto no-scrollbar  w-[97vw]">
          {/* //paritulcar car */}

          {vendorlist.slice(0,5).map((item,index) => {
            let linku = `/vendor?vendor_id=${item._id}`;
            return (
              <div key={index} className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
                <div>
                  <img className="h-[15rem] w-full object-cover" src={image} alt="" srcset="" />
                </div>
                <div className="flex p-4 justify-between bg-[#000515] text-white">
                  <div className="w-[70%]">
                    <h1 className="text-xl">{item.shop_name}</h1>
                    <p className="text-sm">{item.shop_address}</p>
                  </div>
                  <div>
                    <Link to={linku} type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Now</Link>

                  </div>
                </div>
              </div>
            )
          })}


          {/* <div className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
            <div>
              <img className="h-[15rem] w-full object-cover" src={image} alt="" srcset="" />
            </div>
            <div className="flex p-4 justify-between bg-[#000515] text-white">
              <div className="w-[70%]">
                <h1 className="text-xl">Vendor 2</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa.</p>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Now</button>

              </div>
            </div>
          </div>

          <div className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
            <div>
              <img className="h-[15rem] w-full object-cover" src={image} alt="" srcset="" />
            </div>
            <div className="flex p-4 justify-between bg-[#000515] text-white">
              <div className="w-[70%]">
                <h1 className="text-xl">Vendor 3</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa.</p>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Now</button>

              </div>
            </div>
          </div>
          <div className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
            <div>
              <img className="h-[15rem] w-full object-cover" src={image} alt="" srcset="" />
            </div>
            <div className="flex p-4 justify-between bg-[#000515] text-white">
              <div className="w-[70%]">
                <h1 className="text-xl">Vendor 4</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa.</p>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Now</button>

              </div>
            </div>
          </div>
          <div className=" py-2 min-w-[90vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[45vw] border border-black bg-white flex flex-col">
            <div>
              <img className="h-[15rem] w-full object-cover" src={image} alt="" srcset="" />
            </div>
            <div className="flex p-4 justify-between bg-[#000515] text-white">
              <div className="w-[70%]">
                <h1 className="text-xl">Vendor 5</h1>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa.</p>
              </div>
              <div>
                <button type="button" class="focus:outline-none text-[#000515] bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Book Now</button>

              </div>
            </div>
          </div> */}



        </div>
      </div>



    </section>
  );
};

export default ServiceProviders;


