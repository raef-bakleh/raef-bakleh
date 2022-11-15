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
import Nav from "../components/Sidebar/Nav";
export default function Home() {
  const [nav, setNav] = useState(true);

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

  // useEffect(() => {
  //   return;
  // }, [nav,state]);
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
      <div className={classes.hamburger}>
        <Hamburger toggled={nav} toggle={hideShowNav} />
      </div>
      {nav && <Nav setNav={setNav} />}

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
      <div className={state ? classes.rightScoll : classes.rightContainer}>
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
