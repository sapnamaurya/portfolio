import React from "react";
import "./style.css";
import img from "../../assest/images/sapu img.png";

const About = () => {
  return (
    <>
      <div className=" conatiner about-sec">
        <div className="left">
          <img src={img} />
        </div>
        <div className="right">
          <h2>
            About<span> Me.</span>
          </h2>
          <h1>
            Frontend <span>Developer</span>
          </h1>
          <p>
            Being a enthusiastic Frontend developer. I'm having good knowledge
            and experience in HTML5, CSS3, Bootstrap, JavaScript + ES6, React +
            Redux + material UI. I have done training of 4 months under Senior
            software engineer of Adobe India, and part of his freelance team.My
            passion lies in creating captivating website design and implementing
            them through frontend development.
          </p>
          <button>Download CV </button>
        </div>
      </div>
    </>
  );
};

export default About;
