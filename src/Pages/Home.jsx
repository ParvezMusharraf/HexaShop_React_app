import React from "react";
import Banner from "../Components/Banner/Banner";
import MenSection from "../Components/HomeMenSection/MenSection";
import WomenSection from "../Components/WomenHomeSection/WomenSection";
import KidsSection from "../Components/HomeKidsSection/KidsSection";
import SubscribeSection from "../Components/SubscribeSection/Subscraibe";
import JewelerySection from "../Components/HomeJwelerySection/JewelerySection";
import ElectronicSection from "../Components/HomeElectronicSection/ElectronicSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Banner />
      <ElectronicSection />
      <MenSection />
      <WomenSection />
      <KidsSection />
      <JewelerySection />
      <SubscribeSection />
      <Footer/>
    </>
  );
};

export default Home;
