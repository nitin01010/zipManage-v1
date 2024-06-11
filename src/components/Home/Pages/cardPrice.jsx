import React from 'react'

const CardPrice = () => {
    return (
        <div className='p-3 m-1 lg:m-7'>
            <h1 className='text-center text-2xl mb-3 '>Our price</h1>
            <div className='flex  gap-10 text-white  flex-wrap  justify-center '>
                <div className='  bg-blue-800 '>
                    <div className=' bg-blue-600 shadow-md p-3'>
                        <h2 className=' mb-3'>Basic </h2>
                        <p className=' font-extralight'>Access Some </p>
                    </div>
                    <div className=' font-light p-4 flex flex-col gap-10 mt-5'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                    </div>
                    <button className=' p-3 bg-white uppercase font-semibold  text-black m-2 w-[97%] rounded-sm'>Select now</button>
                </div>

                <div className='  bg-blue-800'>
                    <div className=' bg-blue-600 shadow-md p-3'>
                        <h2 className=' mb-3'>Premium </h2>
                        <p className=' font-extralight'>Access Everythink </p>
                    </div>
                    <div className=' font-light p-4 flex flex-col gap-10 mt-5'>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing. ✅ </p>
                    </div>
                    <button className=' p-3 bg-white uppercase font-semibold  text-black m-2 w-[97%] rounded-sm'>Select now</button>
                </div>
            </div>
        </div>
    )
}

export default CardPrice