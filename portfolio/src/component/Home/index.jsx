import React from "react";
import "./style.css";
import img from "../../assest/images/sapu img.png";
const Home = () => {
  return (
    <>
      <div className=" conatiner home-sec">
        <div className="left">
          <h3>Hi,</h3>
          <h1 className="name">
            I'm <span>Sapna Maurya</span>
          </h1>
          <h1 className="title">Frontend Developer</h1>
          <p>
            I'm a Frontend Developer with extensive experience for over 1
            year,expertise is to create and website design,Frontend Design and
            many more...
          </p>

          <button className="home-btn">Experience</button>
        </div>
        <div className="right">
          <img src={img} />
        </div>
      </div>
    </>
  );
};

export default Home;
