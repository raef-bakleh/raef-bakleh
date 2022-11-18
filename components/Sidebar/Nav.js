import React from "react";
import classes from "./Nav.module.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Link from "next/link";

function Nav({ setNav }) {
  return (
    <div>
      <div className={classes.nav}>
        <div
          className={classes.overlay}
          onClick={() => {
            setNav(false);
          }}
        ></div>
        <div className={classes.navIn}>
          <nav className={classes.navbar}>
            <h3 className={classes.navbarLabel}>Menu</h3>
            <ul className={classes.navbarList}>
              <Link className={classes.link} href={"#about"} scroll={false}>
                <li
                  className={classes.listElement}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  about
                </li>
              </Link>

              <Link className={classes.link} href={"#edusk"} scroll={false}>
                {" "}
                <li
                  className={classes.listElement}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Education
                </li>
              </Link>

              <Link className={classes.link} href={"#contact"} scroll={false}>
                <li
                  className={classes.listElement}
                  onClick={() => {
                    setNav(false);
                  }}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
          <div className={classes.social}>
            <Link href={"https://github.com/raefbakleh96"} target="_blank">
              <div className={classes.socialIcons}>
                <BsGithub size={35} />
              </div>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/raef-bakleh-021293230/"}
              target="_blank"
            >
              <div className={classes.socialIcons}>
                <BsLinkedin size={35} />
              </div>
            </Link>
            <Link
              href={"https://www.instagram.com/raefbakleh/"}
              target="_blank"
            >
              <div className={classes.socialIcons}>
                <BsInstagram size={35} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
