import React, { useState } from "react";
import classes from "./Nav.module.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from "next/link";

function Nav({ setNav, nav, language }) {
  const closeNavbar = () => {
    setNav(false);
  };
  console.log(nav);
  return (
    <div>
      {language && (
        <div className={classes.navDivOpened}>
          <div className={nav ? classes.nav : classes.navClosed}>
            <div
              className={nav ? classes.overlay : classes.overlayClosed}
              onClick={closeNavbar}
            ></div>
            <div className={nav ? classes.navIn : classes.navInClosed}>
              <nav className={classes.navbar}>
                <h3 className={classes.navbarLabel}>Menu</h3>
                <ul className={classes.navbarList}>
                  <Link
                    className={classes.link}
                    href={"#about"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      about
                    </li>
                  </Link>

                  <Link
                    className={classes.link}
                    href={"#edusk"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Education
                    </li>
                  </Link>
                  <Link
                    className={classes.link}
                    href={"#portfolio"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Portfolio
                    </li>
                  </Link>

                  <Link
                    className={classes.link}
                    href={"#contact"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Contact
                    </li>
                  </Link>
                </ul>
              </nav>
              <div className={classes.social}>
                <Link href={"https://github.com/raef-bakleh"} target="_blank">
                  <div className={classes.socialIconGit}>
                    <BsGithub size={35} />
                  </div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/raef-bakleh/"}
                  target="_blank"
                >
                  <div className={classes.socialIconLinkedIn}>
                    <BsLinkedin size={35} />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/raefbakleh/"}
                  target="_blank"
                >
                  <div className={classes.socialIconInstagram}>
                    <BsInstagram size={35} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {!language && (
        <div className={classes.navDivOpened}>
          <div className={nav ? classes.nav : classes.navClosed}>
            <div
              className={nav ? classes.overlay : classes.overlayClosed}
              onClick={closeNavbar}
            ></div>
            <div className={nav ? classes.navIn : classes.navInClosed}>
              <nav className={classes.navbar}>
                <h3 className={classes.navbarLabel}>Menü</h3>
                <ul className={classes.navbarList}>
                  <Link
                    className={classes.link}
                    href={"#about"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Über mich
                    </li>
                  </Link>

                  <Link
                    className={classes.link}
                    href={"#edusk"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Ausbildung
                    </li>
                  </Link>
                  <Link
                    className={classes.link}
                    href={"#portfolio"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Portfolio
                    </li>
                  </Link>

                  <Link
                    className={classes.link}
                    href={"#contact"}
                    scroll={false}
                    legacyBehavior
                  >
                    <li className={classes.listElement} onClick={closeNavbar}>
                      Kontakt
                    </li>
                  </Link>
                </ul>
              </nav>
              <div className={classes.social}>
                <Link href={"https://github.com/raef-bakleh"} target="_blank">
                  <div className={classes.socialIconGit}>
                    <BsGithub size={35} />
                  </div>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/raef-bakleh/"}
                  target="_blank"
                >
                  <div className={classes.socialIconLinkedIn}>
                    <BsLinkedin size={35} />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/raefbakleh/"}
                  target="_blank"
                >
                  <div className={classes.socialIconInstagram}>
                    <BsInstagram size={35} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
