import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-blue-600 text-white flex justify-center flex-wrap gap-4 p-3 '>
            <div className=' w-[100%] lg:w-[30%] p-3'>
                <ul>
                    <li className=" bg-white text-black hover:bg-white rounded-sm py-3 mt-2 p-2">Home</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">About</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">Contact</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">Joind us</li>
                </ul>
            </div>
            <div className=' w-[100%] lg:w-[30%] p-3'>
                <ul>
                    <li className="   rounded-sm py-3 mt-2 p-2"></li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">Price</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">Componies</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">Location</li>
                </ul>
            </div>
            <div className=' w-[100%] lg:w-[30%] p-3'>
                <ul>
                    <li className="   rounded-sm py-3 mt-2 p-2"></li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">+91 (9315610276)</li>
                    <li className=" hover:text-black transition-all ease-linear  hover:bg-white rounded-sm py-3 mt-2 p-2">zipManage@work.com</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer