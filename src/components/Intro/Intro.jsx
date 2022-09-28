import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Aashutosh Singh</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis sit ratione itaque repellendus error odio quis nihil, suscipit et quaerat beatae cumque magni omnis sed vitae iusto. Iure, eius!</span>
        </div>
        <button className='button i-button'>Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div>
        </div>
      </div>
    </div >)
}

export default Intro