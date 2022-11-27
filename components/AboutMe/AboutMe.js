import React from "react";
import classes from "./AboutMe.module.css";
import { GoDesktopDownload } from "react-icons/go";
import { useRouter } from "next/router";
import { useState } from "react";

function AboutMe() {
  const [isHoverEmail, setIsHoverEmail] = useState(false);
  const handleMouseEnter = () => {
    setIsHoverEmail(true);
  };
  const handleMouseLeaver = () => {
    setIsHoverEmail(false);
  };
  const [isHoverPhone, setIsHoverPhone] = useState(false);
  const handleMouseEnterPhone = () => {
    setIsHoverPhone(true);
  };
  const handleMouseLeaverPhone = () => {
    setIsHoverPhone(false);
  };
  const router = useRouter();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h3 className={classes.head}>INTRODUCTION</h3>
        <h1 className={classes.introTop}>About Me</h1>
        <div className={classes.line}></div>
        <p className={classes.paragraph}>
          A hungry to learn informatics student. <br /> I am a punctual and
          motivated individual who is able to work in a busy environment and
          produce high standards of work. <br /> I am an excellent team worker
          and am able to take instructions from all levels and build up good
          working relationships with all colleagues. <br /> I am flexible,
          reliable and possess excellent time keeping skills
        </p>
        <div className={classes.about}>
          <div className={classes.aboutLeft}>
            <table className={classes.table}>
              <tbody className={classes.tableBody}>
                <tr className={classes.tableTr}>
                  <th className={classes.tableThFirst}>name</th>
                  <th className={classes.tableThSeconde}>Raef Bakleh</th>
                </tr>
                <tr className={classes.tableTr}>
                  <th className={classes.tableThFirst}>age</th>
                  <th className={classes.tableThSeconde}>25</th>
                </tr>
                <tr className={classes.tableTr}>
                  <th className={classes.tableThFirst}>birthday</th>
                  <th className={classes.tableThSeconde}> 1st January 1997</th>
                </tr>
                <tr className={classes.tableTr}>
                  <th className={classes.tableThFirst}>phone</th>
                  <th
                    className={classes.tableThSeconde}
                    onMouseEnter={handleMouseEnterPhone}
                    onMouseLeave={handleMouseLeaverPhone}
                    onClick={() => {
                      router.push("tel:+49 15204961016");
                    }}
                    style={{
                      cursor: "pointer",
                      color: isHoverPhone ? "#96754e" : "white",
                      textDecoration: "underline 1px rgba(255, 255, 255, 0.2)",
                      textUnderlineOffset: "0.2em ",
                    }}
                  >
                    +49 15204961016
                  </th>
                </tr>
                <tr className={classes.tableTr}>
                  <th className={classes.tableThFirst}>email</th>
                  <th
                    className={classes.tableThSeconde}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeaver}
                    onClick={() => {
                      router.push("mailto:bakleh.raef@gmail.com");
                    }}
                    style={{
                      cursor: "pointer",
                      color: isHoverEmail ? "#96754e" : "",
                      textDecoration: "underline 1px rgba(255, 255, 255, 0.2)",
                      textUnderlineOffset: "0.2em ",
                    }}
                  >
                    bakleh.raef@gmail.com
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.aboutRight}>
            <div className={classes.cvDownload}>
              <a
                href="http://www.raefbakleh.host20.uk/Lebenslauf.pdf"
                target="_blank"
                download
              >
                <span className={classes.icon}>
                  <GoDesktopDownload size={75} />
                </span>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
