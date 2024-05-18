import React from 'react'
import Banner from '../Components/Banner/Banner'
import MenSection from '../Components/HomeMenSection/MenSection'
import WomenSection from '../Components/WomenHomeSection/WomenSection'
import KidsSection from '../Components/HomeKidsSection/KidsSection'
import SubscribeSection from '../Components/SubscribeSection/Subscraibe'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <>
    <ToastContainer
    position="top-center"/>
    <Banner/>
    <MenSection/>
    <WomenSection/>
    <KidsSection/>
    <SubscribeSection/>
    </>
    
  )
}

export default Home
