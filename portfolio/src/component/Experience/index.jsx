import React from "react";
import "./style.css";
import experience from "../../data/experience.json";

const Experience = () => {
  return (
    <div className="ex-sec">
      <h1>Experience</h1>
      {experience.map((data) => {
        return (
          <>
            <div key={data.id} className="ex-item">
              <div className="item">
                <h2>{data.role}</h2>
                <h3>{data.duration}</h3>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Experience;
