import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    return (
        <div className=' bg-blue-500 h-[70px] transition-all p-2 ease-linear delay-75 backdrop-blur-md text-white capitalize  flex flex-wrap md:justify-around  justify-between items-center'>
            <h1>Zip Manage</h1>
            <Menu className='flex cursor-pointer lg:hidden' onClick={ () => setStatus(!status) } />
            { status && (
                <ul className=' bg-blue-500 border-t-4  lg:hidden absolute top-20 left-0 w-full p-3'>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2' onClick={ () => navigate('/') }>Home</li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2' onClick={ () => navigate('/about') }>About</li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2' onClick={ () => navigate('/contacts') }>Contact</li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2' onClick={ () => navigate('/signup') }>Sign Up</li>
                    <li className='py-2 p-2 transition-all ease-linear delay-75 rounded-md hover:bg-green-50 hover:text-black mt-2' onClick={ () => navigate('/login') }>Login</li>
                </ul>
            ) }
            <ul className='hidden lg:flex gap-8 p-3'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contacts">Contact</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )
}

export default Header;
