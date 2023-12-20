import React from 'react'

export default function Search(props) {
    const { service_name } = props;
    return (
        <div className=' '>

            <div className='bg-service bg-cover p-8 sm:p-16  h-full text-white text-center text-4xl font-bold'>
                {service_name.toUpperCase()}
            </div>
            <form className='sm:mx-12'>
                <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium  sr-only text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown2" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-[#F31D32] border border-gray-300 rounded-l-lg " type="button">Filters <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdown2" class="z-10 hidden bg-[#FFFFFF] divide-y divide-gray-100 rounded-lg shadow w-44">
                        <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdown-button">
                            <li >
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-[#F31D32] ">Mockups</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-[#F31D32] ">Templates</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-[#F31D32] ">Design</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-[#F31D32] ">Logos</button>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required />
                        <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#F31D32] rounded-r-lg border  ">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
