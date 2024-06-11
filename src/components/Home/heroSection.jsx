import React from 'react'
import LogoManage from '../../../public/images/Logo.png'

const HeroSection = () => {
    return (
        <div className=' bg-white p-2   md:p-6  flex  flex-wrap lg:flex-nowrap  '>
            <div className='flex  flex-col transition-all ease-linear delay-75 gap-6 text-center w-[100%] lg:w-[50%] p-3'>
                <h1 className=' text-lg text-start   md:text-2xl  p-2 py-5  lg:text-3xl  font-normal'>Lorem, ipsum dolor sit amet <br />   consectetur Lorem,  ipsum dolor. </h1>
                <p className='text-base font-light   md:text-lg  text-start  p-2 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem  dolor odio exercitationem nesciunt eius dolore aliquam modi dolores,  adipisci  nam aperiam ab qui quo?  Modi   voluptatum deserunt doloribus praesentium.</p>
                <div className='p-2 flex'>
                    <button className='py-3 p-2 bg-blue-600 hover:bg-blue-500 min-w-[200px] text-white rounded-md'>View Plans</button>
                </div>
            </div>
            <div className='w-[100%]  transition-all ease-linear delay-75 lg:w-[50%] '>
                <img src={ LogoManage } alt='Logo' className=' object-cover m-auto rounded  w-96' />
            </div>
        </div>
    )
}

export default HeroSection