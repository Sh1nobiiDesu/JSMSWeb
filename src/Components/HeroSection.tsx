import { useEffect } from "react";
import "./HeroSection.css";
import "../App.css";
import { useState } from "react";






function HeroSection() {

const [currImage, setImage] = useState('images/hero-image0.jpg');
let currCount = 0

useEffect(() => {
  const imgInterval = setInterval(() => {
    currCount = (currCount + 1) % 3
    setImage(`images/hero-image${currCount}.jpg`)
    console.log(currCount)
  }, 2500)
  return () => clearInterval(imgInterval)
}, [])

  return (
    <div className="hero-container fade" style={{background:`url(${currImage}) center center/cover no-repeat`}}>
        <h1 className="heroH1">JSMS Creviseal</h1>
        <p className="herop">Learn more about us</p>
    </div>
  );
}

export default HeroSection;
