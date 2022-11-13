import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ProSidebarProvider, Sidebar } from "react-pro-sidebar";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import EduSk from "../components/EduSk/EduSk";
import Nav from "../components/Sidebar/Nav";
import classes from "../styles/Home.module.css";
import profileImage from "./img/IMG.jpeg";
export default function Home() {
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
    <ProSidebarProvider>
      <div className={classes.wrapper}>
        <div className={state ? classes.leftScroll : classes.leftContainer}>
          <AboutMe />
          <EduSk />
          <Contact />
        </div>
        <div className={state ? classes.rightScoll : classes.rightContainer}>
          {/* <Nav /> */}

          <div className={classes.imgWrapper}>
            <div className={state ? classes.longBoxScroll : classes.longBox}>
              <div className={state ? classes.wideBoxScroll : classes.wideBox}>
              
                <Image
                  src={profileImage}
                  className={classes.image}
                />
                <p>HI THERE I AM</p>
                <div className={classes.changedTitle}>{newName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProSidebarProvider>
  );
}
