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
        <p className={classes.paragraph}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut
          aliquid atque quis exercitationem, possimus eveniet suscipit obcaecati
          fugiat. Adipisci ea voluptate, itaque dolor voluptas quas ducimus
          repudiandae doloremque accusamus architecto molestias error debitis
          quae cupiditate nostrum recusandae temporibus cum ipsam reprehenderit
          a voluptatem. Placeat laudantium deserunt sint enim ut eum, eaque eius
          temporibus dicta cumque neque sit, similique, libero nemo voluptas non
          fugiat repellendus accusamus odio soluta consectetur dolorem?
          Doloremque nemo accusantium laboriosam inventore eos necessitatibus!
          Alias, ea natus dolorum quis nostrum veritatis blanditiis? Nostrum,
          vel dolores? Neque atque enim iure pariatur ea porro eligendi officiis
          quaerat inventore quis.
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
              <a target="_blank" download>
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
