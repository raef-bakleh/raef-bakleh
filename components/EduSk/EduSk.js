import React, { useState } from "react";
import classes from "./EduSk.module.css";

function EduSk() {
  const [education, seteEducation] = useState(false);
  const [skills, setSkills] = useState(false);
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
              className={education ? classes.clicked : ""}
              onClick={educationClicked}
            >
              Education
            </a>
          </li>
          <div className={classes.line}></div>
          <li className={classes.choose}>
            <a
              className={skills ? classes.clicked : ""}
              onClick={skillsClicked}
            >
              Skills
            </a>
          </li>
          <div className={classes.line}></div>
          <li className={classes.choose}>
            <a
              className={experience ? classes.clicked : ""}
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
                <h3>ludwig maximilians universität (2016-today)</h3>
                <h1> Computer Science</h1>
              </div>
              <div className={classes.educationElement}>
                <h3>ludwig maximilians universität (2016-today)</h3>
                <h1> Computer Science</h1>
              </div>
              <div className={classes.educationElement}>
                <h3>ludwig maximilians universität (2016-today)</h3>
                <h1> Computer Science</h1>
              </div>
            </div>
          )}
          {experience && <div className={classes.experience}>hello</div>}
          {skills && (
            <div className={classes.skills}>
              <ul>
                <li>Java Script</li>
                <li>HTML5 & CSS</li>
                <li>Haskel</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EduSk;
