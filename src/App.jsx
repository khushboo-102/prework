import React from "react";
import './App.css'
import Navigation from "./Components/Navigation";
import Herobar from "./Components/Herobar"
import MainSection1 from "./Components/MainSection1"
import MainSection2 from "./Components/MainSection2"
import MainSection3 from "./Components/MainSection3"
import MainSection4 from "./Components/MainSection4"
import Footer from "./Components/Footer"
 





function App() {

    return (
        <>
            <Navigation />
            <Herobar />
            <MainSection1 />
            <MainSection2 />
            <div className="Mainsection3">
                <MainSection3 image="wireless.png"
                    firstpara="Wireless"
                    heading="Reliable Wireless Solutions"
                    secondpara="Discover Wireless Freedom with Velionex – Explore flexible, high-speed options that keep you connected wherever you are"
                    lists={["Stay connected anywhere", "Seamless setup", "Flexible plans"]}
                    button="Explore Wireless" />

                <MainSection3 image="internet.jpeg"
                    firstpara="Internet"
                    heading="Powerful Connections"
                    secondpara="Explore High-Speed Internet with Velionex – Flexible plans to keep you connected, every day."
                    lists={["Fast, Reliable Speeds", "Customized Options", "Dependable Service"]}
                    button="Explore Internet" />

                <MainSection3 image="directv.png"
                    firstpara="Directv"
                    heading="Premium Entertainment"
                    secondpara="Explore DIRECTV with Velionex – tailored plans to bring you the best in TV and streaming, wherever you are."
                    lists={["Hundreds of Channels", "Stream on Any Device", "Crystal-Clear HD and"]}
                    button="Explore Directv" />


            </div>
            <MainSection4 />
            <Footer/>
        </>

    )
}

export default App