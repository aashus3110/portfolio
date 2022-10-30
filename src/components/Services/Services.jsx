import React from 'react'
import "./Services.css";
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf"


const Services = () => {
  return (
    <div className="services">
      {/*left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eaque excepturi <br /> aut placeat?Natus ad ut ex nam molestiae veritatis!</span>
        <a href={Resume} download><button className='button s-button'>Download CV</button></a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right side*/}
      <div className="cards">
        {/*1ST*/}
        <div style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd "} />
        </div>
        {/*2ed*/}
        <div style={{ top: "8rem", left: "-2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"} />
        </div>
        {/*3ed*/}
        <div style={{ top: "18rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eaque excepturi aut placeat"}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>

    </div>
  )
}

export default Services