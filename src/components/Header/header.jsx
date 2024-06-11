import React, { useState } from 'react'
import { Menu } from 'lucide-react';

const Header = () => {
    const [status, setStatus] = useState(false);
    return (
        <div className=' bg-blue-500 h-[70px] transition-all p-2 ease-linear delay-75 backdrop-blur-md text-white capitalize  flex flex-wrap md:justify-around  justify-between items-center'>
            <h1>Zip Manage</h1>
            <Menu className='flex cursor-pointer lg:hidden' onClick={ () => setStatus(!status) } />
            { status && (
                <ul className=' bg-blue-500 border-t-4  lg:hidden absolute top-20 left-0 w-full p-3'>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2'><a href="/">Home</a></li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2'><a href="/about">About</a></li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2'><a href="/contacts">Contact</a></li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2'><a href="/signup">Sign Up</a></li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2'><a href="/login">Login</a></li>
                </ul>
            ) }
            <ul className='hidden lg:flex gap-8 p-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contact</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Header