import React from 'react'
import { Timer, HandCoins, Flag, FastForward, Expand, Laptop } from 'lucide-react';
const WhyUse = () => {
    return (
        <div className='m-7 '>
            <h1 className=' text-center text-2xl mb-3'>Why we use </h1>
            <div class="grid grid-cols-1  lg:grid-cols-3 gap-4 p-2">
                <span className=' flex   gap-6 flex-col p-4 items-center  '>
                    <p className=" font-semibold">Time Saving</p>
                    <Timer size={ 30 } color='blue' />
                </span>
                <span className=' flex   gap-6 flex-col p-4 items-center '>
                    <p className=" font-semibold">Money Saving</p>
                    <HandCoins size={ 30 } color='blue' />
                </span>
                <span className=' flex   gap-6 flex-col p-4 items-center '>
                    <p className=" font-semibold">Easy </p>
                    <Flag size={ 30 } color='blue' />
                </span>
                <span className=' flex   gap-6 flex-col p-4 items-center '>
                    <p className=" font-semibold">Fast</p>
                    <FastForward size={ 30 } color='blue' />
                </span>
                <span className=' flex   gap-6 flex-col p-4 items-center '>
                    <p className=" font-semibold">Scale</p>
                    <Expand size={ 30 } color='blue' />
                </span>
                <span className=' flex   gap-6 flex-col p-4 items-center '>
                    <p className=" font-semibold">Remote options</p>
                    <Laptop size={ 30 } color='blue' />
                </span>
            </div>
        </div>
    )
}

export default WhyUse