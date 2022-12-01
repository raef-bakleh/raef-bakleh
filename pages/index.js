import Image from "next/image";
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
import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();
  const [footerUpDown, setFooterUpDown] = useState();
  useEffect(() => {
    if (size.width > 1040) {
      setFooterUpDown(true);
    } else {
      setFooterUpDown(false);
    }
  });

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: true,
  });
  const [nav, setNav] = useState(false);

  const hideShowNav = () => {
    setNav(!nav);
  };
  const names = [
    "Raef Bakleh",
    "Informatics Student",
    "Learning Web Development",
  ];

  const [state, setState] = useState(false);

  useEffect(function onFirstMount() {
    const changeValue = () => {
      const scrollValue = document.documentElement.scrollTop;
      if (scrollValue > 150) {
        setState(true);
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", changeValue);
  });
  return (
    <div className={classes.wrapper}>
      {!footerUpDown && (
        <footer className={classes.footer}>
          <div className={classes.arrow}>
            <Link href="/#image" scroll={false}>
              <BsArrowUp className={classes.arrowUp} size={55} />
            </Link>
          </div>
          <div className={classes.footerText}>
            <div>Copyright © 2022. All rights reserved.</div>
            <br />
            <div>
              Developed by &nbsp;
              <Link
                className={classes.link}
                href={"https://github.com/raef-bakleh"}
                target="_blank"
              >
                Raef Bakleh
              </Link>
            </div>
          </div>
        </footer>
      )}
      <AnimatedCursor
        color="75, 73, 73"
        innerSize={4}
        outerSize={25}
        innerScale={4}
        outerScale={0}
        outerAlpha={0}
        trailingSpeed={5}
        outerStyle={{
          border: "2px solid rgb(75, 73, 73)",
          zIndex: "10001",
        }}
        innerStyle={{
          zIndex: "1001",
          border: "2px solid rgb(205, 73, 73)",
        }}
        clickables={["none"]}
      />

      <div className={state ? classes.leftScroll : classes.leftContainer}>
        <section id="about">
          <AboutMe />
        </section>
        <section id="edusk">
          <EduSk />
        </section>
        <section>
          <Portfolio windowSize={size} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <div className={state ? classes.rightScoll : classes.rightContainer}>
        <div className={!nav ? classes.hamburger : classes.hamburgerClose}>
          <Hamburger
            className={classes.reactHamburger}
            toggled={nav}
            toggle={hideShowNav}
          />
        </div>
        {<Nav setNav={setNav} nav={nav} />}

        <div className={classes.imgWrapper}>
          <div className={state ? classes.longBoxScroll : classes.longBox}>
            <div className={state ? classes.wideBoxScroll : classes.wideBox}>
              <Image id="image" src={profileImage} className={classes.image} />
              <p>HI THERE , I AM</p>
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
      {footerUpDown && (
        <footer className={classes.footer}>
          <div className={classes.arrow}>
            <Link href="/#about" scroll={false}>
              <BsArrowUp
                onClick={() => {
                  setNav(false);
                }}
                className={classes.arrowUp}
                size={55}
              />
            </Link>
          </div>
          <div className={classes.footerText}>
            <div>Copyright © 2022. All rights reserved.</div>
            <br />
            <div>
              Developed by &nbsp;
              <Link
                className={classes.link}
                href={"https://github.com/raef-bakleh"}
                target="_blank"
              >
                Raef Bakleh
              </Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
