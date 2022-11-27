import React, { useState } from "react";
import classes from "./EduSk.module.css";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import SQL from "../../pages/img/SQL.png";
import PLSQL from "../../pages/img/PLSQL.png";

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
                <h1 className={classes.titel}> Computer Science</h1>
              </div>
              <div className={classes.educationElement}>
                <h3>Technical University Of Munich (2017-2018)</h3>
                <h1 className={classes.titel}>
                  {" "}
                  Electrical Engineering and Information Technology
                </h1>
              </div>
            </div>
          )}
          {experience && (
            <div className={classes.experience}>
              <div className={classes.experienceElement}>
                <h3>Avi Medical (2022-today)</h3>
                <h1 className={classes.titel}> IT Working Student</h1>
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
                  <h1>HTML5</h1>
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
                <div className={classes.skill}>
                  <svg
                    width="125px"
                    height="115px"
                    viewBox="0 0 512 309"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                        fill-rule="nonzero"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                  <h1>Next.js</h1>
                </div>
                <div className={classes.skill}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="115px"
                    width="200px"
                    version="1.0"
                    viewBox="-95.705205 -19.9941 829.44511 119.9646"
                  >
                    <path
                      d="M265.5913 52.032h40.652L284.748 17.4495l-39.4513 62.527h-17.955l47.986-75.1083C277.414 1.8334 280.8911 0 284.748 0c3.7298 0 7.207 1.7702 9.2302 4.7417l48.1755 75.2347h-17.955l-8.4719-13.9722h-41.158zm186.5063 13.9722V.7587H436.861v71.631c0 1.96.7588 3.8566 2.2128 5.3107 1.454 1.4541 3.414 2.276 5.5635 2.276h69.4816l8.9775-13.9722zm-252.068-11.6961c14.7943 0 26.8066-11.949 26.8066-26.7431 0-14.794-12.0123-26.8063-26.8065-26.8063H133.374v79.2177h15.2306V14.7308h50.4135c7.0811 0 12.771 5.7532 12.771 12.8342 0 7.0809-5.6899 12.8342-12.771 12.8342l-42.9532-.0633 45.482 39.6404h22.1281L193.0754 54.308zM39.6157 79.9764C17.7465 79.9764 0 62.274 0 40.3992 0 18.5242 17.7467.7587 39.6155.7587h46.0446c21.875 0 39.609 17.7655 39.609 39.6405 0 21.8749-17.734 39.5772-39.609 39.5772zM84.636 66.0042c14.1684 0 25.6433-11.4433 25.6433-25.605 0-14.1619-11.4749-25.6684-25.6433-25.6684H40.6332c-14.1618 0-25.6433 11.5065-25.6433 25.6684 0 14.1617 11.4815 25.605 25.6433 25.605zm289.3186 13.9722c-21.875 0-39.6403-17.7023-39.6403-39.5772 0-21.875 17.7653-39.6405 39.6403-39.6405h54.6874l-8.9143 13.9721h-44.7615c-14.1619 0-25.668 11.5065-25.668 25.6684 0 14.1617 11.5061 25.605 25.668 25.605h54.9401l-8.9774 13.9722zm186.3167-13.9722c-11.6963 0-21.6222-7.8396-24.657-18.6506h65.1193l8.9775-13.9722h-74.0968c3.0348-10.7478 12.9607-18.6506 24.657-18.6506h44.6983L614.0102.7587h-54.7506c-21.875 0-39.6403 17.7655-39.6403 39.6405 0 21.8749 17.7653 39.5772 39.6403 39.5772h46.9743l8.9774-13.9722h-54.94m61.8948-56.8369a6.9341 6.9341 0 016.9543-6.9545c3.92 0 7.0175 3.0979 7.0175 6.9545 0 3.9197-3.0975 7.0176-7.0175 7.0176-3.8568 0-6.9543-3.0979-6.9543-7.0176zm6.9543 8.9775c4.9311 0 8.9143-3.983 8.9143-8.9143 0-4.9314-3.9832-8.9144-8.9143-8.9144-4.8684 0-8.851 3.983-8.851 8.9144 0 4.9313 3.9826 8.9143 8.851 8.9143zm-.822-14.225c1.3908 0 1.96.0632 2.5924.316 1.77.5691 1.9595 2.1496 1.9595 2.7819 0 .1264 0 .4425-.1264.8218-.063.3794-.3159 1.138-1.201 1.707-.1265.0633-.1897.1265-.4425.253l2.276 4.1094h-2.2128l-2.0232-3.7933h-1.3907v3.7933h-1.96V3.9198zm.6956 4.552c.632-.0632 1.2644-.0632 1.6436-.6323.1895-.2528.2532-.5057.2532-.885 0-.5058-.3164-.9484-.7588-1.2013-.4428-.1896-.8852-.1896-1.8336-.1896h-.5687v2.9082h1.2643"
                      fill="#f80000"
                    />
                  </svg>
                  <h1>Oracle APEX</h1>
                </div>
                <div className={classes.skill}>
                  <Image src={PLSQL} className={classes.SQL} />

                  <h1>PL/SQL</h1>
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
