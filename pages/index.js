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
import ChatbotComponent from "../components/Chatbot/Chatbot";
import { SiChatbot } from "react-icons/si";

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
  const namesEnglisch = [
    "Raef Bakleh",
    "Informatics Student",
    "Learning Web Development",
  ];
  const namesDeutsch = [
    "Raef Bakleh",
    "Informatik Student",
    "lerne Webentwicklung",
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
  const [chatbot, setChatbot] = useState(false);
  const chatbotOpenClose = () => {
    setChatbot(!chatbot);
  };
  const [language, setLanguage] = useState(true);
  const toggleLanguage = () => {
    setLanguage(!language);
  };
  return (
    <div>
      {language && (
        <div className={classes.wrapper}>
          <div className={classes.toggleLanguage} onClick={toggleLanguage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="25"
              viewBox="0 0 5 3"
            >
              <desc>Flag of Germany</desc>
              <rect
                id="black_stripe"
                width="5"
                height="3"
                y="0"
                x="0"
                fill="#000"
              />
              <rect
                id="red_stripe"
                width="5"
                height="2"
                y="1"
                x="0"
                fill="#D00"
              />
              <rect
                id="gold_stripe"
                width="5"
                height="1"
                y="2"
                x="0"
                fill="#FFCE00"
              />
            </svg>
          </div>
          {!nav && (
            <div className={classes.chatbotContainer}>
              <SiChatbot
                onClick={chatbotOpenClose}
                className={classes.chatbotIcon}
                size={45}
              />
              {chatbot && <ChatbotComponent zindex={nav} />}
            </div>
          )}
          {footerUpDown && (
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
              <AboutMe language={language} />
            </section>
            <section id="edusk">
              <EduSk language={language} />
            </section>
            <section id="portfolio">
              <Portfolio language={language} windowSize={size} />
            </section>
            <section id="contact">
              <Contact language={language} />
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
            {<Nav setNav={setNav} nav={nav} language={language} />}

            <div className={classes.imgWrapper}>
              <div className={state ? classes.longBoxScroll : classes.longBox}>
                <div
                  className={state ? classes.wideBoxScroll : classes.wideBox}
                >
                  <Image
                    id="image"
                    src={profileImage}
                    className={classes.image}
                  />
                  <p>HI THERE , I AM</p>
                  <div className={classes.changedTitle}>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(namesEnglisch[0])
                          .pauseFor(3000)
                          .deleteAll()
                          .typeString(namesEnglisch[1])
                          .pauseFor(3000)
                          .deleteAll()
                          .typeString(namesEnglisch[2])
                          .pauseFor(3000)
                          .start();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {footerUpDown && (
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
          )} */}
        </div>
      )}
      {!language && (
        <div className={classes.wrapper}>
          <div className={classes.toggleLanguage} onClick={toggleLanguage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 30"
              width="45"
              height="25"
            >
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
              </clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  clip-path="url(#t)"
                  stroke="#C8102E"
                  stroke-width="4"
                />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                <path
                  d="M30,0 v30 M0,15 h60"
                  stroke="#C8102E"
                  stroke-width="6"
                />
              </g>
            </svg>
          </div>
          {!nav && (
            <div className={classes.chatbotContainer}>
              <SiChatbot
                onClick={chatbotOpenClose}
                className={classes.chatbotIcon}
                size={45}
              />
              {chatbot && <ChatbotComponent zindex={nav} />}
            </div>
          )}
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
              <AboutMe language={language} />
            </section>
            <section id="edusk">
              <EduSk language={language} />
            </section>
            <section id="portfolio">
              <Portfolio language={language} windowSize={size} />
            </section>
            <section id="contact">
              <Contact language={language} />
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
            {<Nav setNav={setNav} nav={nav} language={language} />}

            <div className={classes.imgWrapper}>
              <div className={state ? classes.longBoxScroll : classes.longBox}>
                <div
                  className={state ? classes.wideBoxScroll : classes.wideBox}
                >
                  <Image
                    id="image"
                    src={profileImage}
                    className={classes.image}
                  />
                  <p>HALLO 👋, ICH BIN</p>
                  <div className={classes.changedTitle}>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(namesDeutsch[0])
                          .pauseFor(3000)
                          .deleteAll()
                          .typeString(namesDeutsch[1])
                          .pauseFor(3000)
                          .deleteAll()
                          .typeString(namesDeutsch[2])
                          .pauseFor(3000)
                          .start();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {footerUpDown && (
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
          )} */}
        </div>
      )}
    </div>
  );
}
