import React from 'react'
import HeroSection from './heroSection'
import WhyUse from './Pages/whyUse'
import Benefit from './Pages/benefit'
import Companies from './Pages/companies'
import CardPrice from './Pages/cardPrice'
import OurMission from './Pages/ourMission'
import Problem from './Pages/problem'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Problem />
            <WhyUse />
            {/* <Benefit /> */ }
            {/* <Companies /> */ }
            <CardPrice />
            {/* <OurMission /> */ }
        </div>
    )
}

export default Home