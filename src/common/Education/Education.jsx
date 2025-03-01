import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h1 className="sectionTitle">Education</h1>
      <div className="education-container">
        <div className="education-item">
          <h3>Master of Computer Applications (MCA)</h3>
          <p>Annai College of Arts & Science, Kumbakonam</p>
          <p>2021 - 2023</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Meenakshi Ramasamy Arts & Science College, Thathanur</p>
          <p>2018 - 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;