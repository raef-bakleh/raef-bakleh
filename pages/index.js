import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import EduSk from "../components/EduSk/EduSk";
import classes from "../styles/Home.module.css";
import profileImage from "./img/IMG.jpeg";
import Hamburger from "hamburger-react";
import Nav from "../components/Sidebar/Nav";
import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";

export default function Home() {
  const [nav, setNav] = useState(false);
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: true,
  });

  const hideShowNav = () => {
    setNav(!nav);
  };
  const names = [
    "Raef Bakleh",
    "Computer Science Student",
    "Learning Web Development",
  ];

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
      <AnimatedCursor
        color="75, 73, 73"
        innerSize={8}
        outerSize={25}
        innerScale={0}
        outerScale={1}
        outerAlpha={0}
        trailingSpeed={5}
        outerStyle={{
          border: "2px solid rgb(75, 73, 73)",
          zIndex: "10001",
        }}
        innerStyle={{
          zIndex: "1001",
        }}
        clickables={["none"]}
      />
      <div className={classes.hamburger}>
        <Hamburger toggled={nav} toggle={hideShowNav} />
        {nav && <Nav setNav={setNav} />}
      </div>

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
              <div className={classes.changedTitle}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(names[0])

                      .pauseFor(3000)
                      .deleteAll()
                      .typeString(names[1])
                      .pauseFor(3000)
                      .deleteAll()
                      .typeString(names[2])
                      .pauseFor(3000)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
