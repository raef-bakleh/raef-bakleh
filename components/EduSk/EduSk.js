import React, { useState } from "react";
import classes from "./EduSk.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import SQL from "../../pages/img/SQL.png";

function EduSk() {
  const [education, seteEducation] = useState(false);
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);

  const educationClicked = () => {
    seteEducation(!education);
    setSkills(false);
    setExperience(false);
  };
  const skillsClicked = () => {
    setSkills(!skills);
    setExperience(false);
    seteEducation(false);
  };
  const experienceClicked = () => {
    setExperience(!experience);
    setSkills(false);
    seteEducation(false);
  };
  return (
    <div className={classes.section}>
      <div className={classes.eduSk}>
        <ul className={classes.filter}>
          <li className={classes.choose}>
            <a
              className={education ? classes.clicked : classes.clickedHover}
              onClick={educationClicked}
            >
              Education
            </a>
          </li>
          <div className={classes.line}></div>
          <li className={classes.choose}>
            <a
              className={skills ? classes.clicked : classes.clickedHover}
              onClick={skillsClicked}
            >
              Skills
            </a>
          </li>
          <div className={classes.line}></div>
          <li className={classes.choose}>
            <a
              className={experience ? classes.clicked : classes.clickedHover}
              onClick={experienceClicked}
            >
              Experience
            </a>
          </li>
        </ul>
        <div className={classes.content}>
          {education && (
            <div className={classes.education}>
              <div className={classes.educationElement}>
                <h3>Ludwig Maximilians Universität (2018-today)</h3>
                <h1> Computer Science</h1>
              </div>
              <div className={classes.educationElement}>
                <h3>Technical University Of Munich (2017-2018)</h3>
                <h1> Electrical Engineering and Information Technology</h1>
              </div>
            </div>
          )}
          {experience && (
            <div className={classes.experience}>
              <div className={classes.experienceElement}>
                <h3>Avi Medical (2022-today)</h3>
                <h1> IT Working Student</h1>
              </div>
            </div>
          )}
          {skills && (
            <div className={classes.skills}>
              <Marquee
                className={classes.marquee}
                play={true}
                pauseOnHover={true}
                speed={100}
                gradient={false}
              >
                <div className={classes.skill}>
                  <img
                    width={115}
                    height={115}
                    alt="CSS3 logo"
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                  />
                  <h1>CSS</h1>
                </div>
                <div className={classes.skill}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-11.5 -10.23174 23 20.46348"
                    width={115}
                    height={115}
                  >
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                    <g stroke="#61dafb" stroke-width="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                  <h1>React</h1>
                </div>
                <div className={classes.skill}>
                  <img
                    width={115}
                    height={115}
                    alt="CSS3 logo"
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                  />
                  <h1>HTML</h1>
                </div>
                <div className={classes.skill}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="125px"
                    height="115px"
                  >
                    <polygon
                      fill="#453a62"
                      points="9,43 5,43 1,43 13,25 1,7 5,7 9,7 21,25"
                    />
                    <polygon
                      fill="#5e5086"
                      points="20,7 16,7 12,7 24,25 12,43 16,43 20,43 28.16,30.76 36,43 40,43 44,43"
                    />
                    <polygon
                      fill="#8f4e8b"
                      points="34.338,24 47,24 47,18 30.338,18"
                    />
                    <polygon
                      fill="#8f4e8b"
                      points="40.338,33 47,33 47,27 36.338,27"
                    />
                  </svg>
                  <h1>Haskel</h1>
                </div>
                <div className={classes.skill}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="125px"
                    height="115px"
                    viewBox="0 0 1052 1052"
                  >
                    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                    <path
                      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                      fill="#323330"
                    />
                  </svg>
                  <h1>JavaScript</h1>
                </div>
                <div className={classes.skill}>
                  <Image src={SQL} className={classes.SQL} />
                  <h1>SQL</h1>
                </div>
              </Marquee>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EduSk;
