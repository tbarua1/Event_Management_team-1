import React from 'react'
import Content from '../Content'
import { InfoData, InfoData2 } from '../InfoData'
import InfoSection from '../InfoSection'
import { SliderData } from '../SliderData'

const Home = () => {
    return (
        <>
            <Content slides = {SliderData} />
            <InfoSection {...InfoData}/>
            <InfoSection {...InfoData2}/>

        </>
    )
}

export default Home
