import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const locations = [
        'India, Delhi',
    ];
    return (
        <div className='bg-blue-600 text-white flex justify-around flex-wrap gap-8 p-6'>
            <div className='w-[100%] lg:w-[30%] p-4'>
                <ul>
                    <li className="bg-white text-black hover:bg-gray-200 rounded-sm py-3 mt-2 px-4 transition-all ease-linear"><Link to="/">Home</Link></li>
                    <li className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4"><Link to="/about">About</Link></li>
                    <li className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4"><Link to="/contacts">Contact</Link></li>
                    <li className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4"><Link to="/career">career</Link></li>
                </ul>
            </div>

            <div className='w-[100%] lg:w-[30%] p-4'>
                <ul>
                    { locations.map((location, index) => (
                        <li key={ index } className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4">
                            { location }
                        </li>
                    )) }
                    <li className="rounded-sm py-3 mt-2 px-4"></li>
                    <li className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4">+91 (9315610276)</li>
                    <li className="hover:text-black transition-all ease-linear hover:bg-gray-200 rounded-sm py-3 mt-2 px-4">zipManage@work.com</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
