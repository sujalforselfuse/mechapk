import React from 'react'

export default function Career() {
    return (
        <div className='w-full flex flex-col sm:flex-row p-6 sm:p-16 gap-8 sm:gap-8 md:gap-12 lg:gap-48 xl:gap-64 '>
            <div className='sm:w-[40%] md:w-[30%] lg:w-[20%] bg-[#F31D32] rounded-md sm:px-4 sm:py-8'>
                <div className='flex flex-col text-center gap-4 p-4'>
                    <h1 className='font-bold text-2xl' >Hiring</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum d
                        olor in a et quisquam, aperiam ra
                        tione aliquam voluptate fuga expedita
                        eveniet eaque consequuntur ut dolorem, cum magni la
                        udantium fugit hic.</p>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-12 '>
                    <div className='bg-career1 bg-cover font-semibold p-12 sm:p-16 lg:p-20 rounded-tl-3xl rounded-br-3xl' style={{boxShadow:" 12px 12px 2px 1px rgba(255, 255, 255, .2)"}}>POSITION</div>
                    
                    <div className='bg-career1 bg-cover font-semibold p-12 sm:p-16 lg:p-20 rounded-tl-3xl rounded-br-3xl' style={{boxShadow:" 12px 12px 2px 1px rgba(255, 255, 255, .2)"}} >POSITION</div>
                    
                    <div className='bg-career1 bg-cover font-semibold p-12 sm:p-16 lg:p-20 rounded-tl-3xl rounded-br-3xl' style={{boxShadow:" 12px 12px 2px 1px rgba(255, 255, 255, .2)"}}>POSITION</div>
                    
                    <div className='bg-career1 bg-cover font-semibold p-12 sm:p-16 lg:p-20 rounded-tl-3xl rounded-br-3xl' style={{boxShadow:" 12px 12px 2px 1px rgba(255, 255, 255, .2)"}}>POSITION</div>
                    
                </div>
            </div>
        </div>
    )
}
