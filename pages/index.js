import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import EduSk from "../components/EduSk/EduSk";
import classes from "../styles/Home.module.css";
import profileImage from "./img/IMG.jpeg";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Hamburger from "hamburger-react";
export default function Home() {
  const [nav, setNav] = useState(false);

  const hideShowNav = () => {
    setNav(!nav);
  };
  console.log(nav);
  const names = [
    "Raef Bakleh",
    "Computer Science Student",
    "Learning Web Development",
  ];
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  const [state, setState] = useState(false);

  useEffect(function onFirstMount() {
    const changeValue = () => {
      const scrollValue = document.documentElement.scrollTop;
      if (scrollValue > 100) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", changeValue);
  });
  return (
    <div className={classes.wrapper}>
      <div className={state ? classes.leftScroll : classes.leftContainer}>
        <section id="about">
          <AboutMe />
        </section>
        <section id="edusk">
          <EduSk />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div
        id="#about"
        className={state ? classes.rightScoll : classes.rightContainer}
      >
        <div className={classes.hamburger}>
          <Hamburger toggled={nav} toggle={hideShowNav} />
        </div>
        {nav && (
          <div className={classes.nav}>
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

                  <Link
                    className={classes.link}
                    href={"#contact"}
                    scroll={false}
                  >
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
        )}

        <div className={classes.imgWrapper}>
          <div className={state ? classes.longBoxScroll : classes.longBox}>
            <div className={state ? classes.wideBoxScroll : classes.wideBox}>
              <Image src={profileImage} className={classes.image} />
              <p>HI THERE I AM</p>
              <div className={classes.changedTitle}>{newName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
