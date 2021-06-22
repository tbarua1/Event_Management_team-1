import React from 'react'
import { AboutData, AboutData2, AboutData3, AboutData4, AboutData5 } from '../AboutData'
import AboutSection from '../AboutSection'

const AboutUs = () => {
    return (
        <>
            
            <AboutSection {...AboutData}/>
            <AboutSection {...AboutData2}/>
            <AboutSection {...AboutData3}/>
            <AboutSection {...AboutData4}/>
            <AboutSection {...AboutData5}/>

        </>
    )
}

export default AboutUs
