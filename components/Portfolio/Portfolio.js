import React, { useState } from "react";
import classes from "../Portfolio/Portfolio.module.css";
import "../Portfolio/Portfolio.module.css";
import Projekt1 from "../../pages/img/project1.png";
import Projekt2 from "../../pages/img/project2.png";
import Projekt3 from "../../pages/img/haskel.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import inCon from "../../pages/img/inconstruction.jpg";
import SwiperCore, { Autoplay } from "swiper";

function Portfolio(props) {
  console.log(props.windowSize.height);
  const width = props.windowSize.width;
  const height = props.windowSize.height;
  SwiperCore.use([Autoplay]);

  const [swiper, setSwiper] = useState(null);
  console.log(props.language);
  return (
    <div>
      {props.language && (
        <div className={classes.section}>
          <div className={classes.portfolio}>
            <h3 className={classes.head}>Portfolio</h3>
            <h1 className={classes.introTop}> Latest Projects</h1>
            <div className={classes.line}></div>
            <div className={classes.swiperButtons}>
              <AiOutlineArrowLeft
                onClick={() => {
                  swiper.slidePrev();
                }}
                className={classes.swiperButton}
              >
                slide prev
              </AiOutlineArrowLeft>
              <AiOutlineArrowRight
                className={classes.swiperButton}
                onClick={() => {
                  swiper.slideNext();
                }}
              >
                slide next
              </AiOutlineArrowRight>
            </div>
          </div>

          <div className={classes.swiper}>
            <Swiper
              tabIndex={0}
              spaceBetween={20}
              className={classes.swiperContainer}
              slidesPerView={width > 800 ? 3 : 1}
              loop={true}
              autoplay={{
                delay: 200,
                pauseOnMouseEnter: "true",
              }}
              draggable={true}
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image
                    height={250}
                    src={Projekt1}
                    className={classes.projectPhoto}
                    sizes={"50vw"}
                  ></Image>
                  <p className={classes.projektName}>Food Ordering Website</p>
                  <div className={classes.projektOverlayImage}>
                    <Link
                      className={classes.link}
                      href="https://food-order-website.vercel.app/"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link
                      className={classes.link}
                      href="https://github.com/raef-bakleh/food-order-website"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image
                    height={250}
                    src={Projekt2}
                    className={classes.projectPhoto}
                  ></Image>
                  <p className={classes.projektName}>Expanses Manager</p>
                  <div className={classes.projektOverlayImage}>
                    <Link
                      className={classes.link}
                      href="https://expenses-manager-gamma.vercel.app/"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link
                      className={classes.link}
                      href="https://github.com/raef-bakleh/expenses-manager"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image
                    src={Projekt3}
                    className={classes.projectPhoto}
                  ></Image>
                  <p className={classes.projektName}>
                    Functional Langauge implementation
                  </p>
                  <div className={classes.projektOverlayImage}>
                    <Link
                      className={classes.link}
                      href="https://github.com/raef-bakleh/Academic-Project/tree/main/sep-impl-team-7-main"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image src={inCon} className={classes.projectGif}></Image>
                  <p className={classes.projektName}>Car Sharing Website</p>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image src={inCon} className={classes.projectGif}></Image>
                  <p className={classes.projektName}>Live Chat App</p>
                </div>
              </SwiperSlide> */}
              {/*  <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.swiperProject}>
              <Image src={Projekt1} className={classes.projectPhoto}></Image>
              <p>Food Ordering Website</p>
              <div className={classes.projektOverlay}>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>Demo</p>
                </Link>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>github</p>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      )}
      {!props.language && (
        <div className={classes.section}>
          <div className={classes.portfolio}>
            <h3 className={classes.head}>Portfolio</h3>
            <h1 className={classes.introTop}> Letzte Projekte</h1>
            <div className={classes.line}></div>
            <div className={classes.swiperButtons}>
              <AiOutlineArrowLeft
                onClick={() => {
                  swiper.slidePrev();
                }}
                className={classes.swiperButton}
              >
                slide prev
              </AiOutlineArrowLeft>
              <AiOutlineArrowRight
                className={classes.swiperButton}
                onClick={() => {
                  swiper.slideNext();
                }}
              >
                slide next
              </AiOutlineArrowRight>
            </div>
          </div>

          <div className={classes.swiper}>
            <Swiper
              tabIndex={0}
              spaceBetween={30}
              className={classes.swiperContainer}
              slidesPerView={width > 800 ? 3 : 1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              onSwiper={(s) => {
                setSwiper(s);
              }}
            >
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image
                    height={250}
                    src={Projekt1}
                    className={classes.projectPhoto}
                    sizes={"50vw"}
                  ></Image>
                  <p className={classes.projektName}>Food Ordering Website</p>
                  <div className={classes.projektOverlayImage}>
                    <Link
                      className={classes.link}
                      href="https://food-order-website.vercel.app/"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link
                      className={classes.link}
                      href="https://github.com/raef-bakleh/food-order-website"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image
                    height={250}
                    src={Projekt2}
                    className={classes.projectPhoto}
                  ></Image>
                  <p className={classes.projektName}>Expanses Manager</p>
                  <div className={classes.projektOverlayImage}>
                    <Link
                      className={classes.link}
                      href="https://expenses-manager-gamma.vercel.app/"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link
                      className={classes.link}
                      href="https://github.com/raef-bakleh/expenses-manager"
                      target={"_blank"}
                    >
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image src={inCon} className={classes.projectGif}></Image>
                  <p className={classes.projektName}>Car Sharing Website</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.swiperProject}>
                  <Image src={inCon} className={classes.projectGif}></Image>
                  <p className={classes.projektName}>Live Chat App</p>
                </div>
              </SwiperSlide>
              {/*  <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.swiperProject}>
              <Image src={Projekt1} className={classes.projectPhoto}></Image>
              <p>Food Ordering Website</p>
              <div className={classes.projektOverlay}>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>Demo</p>
                </Link>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>github</p>
                </Link>
              </div>
            </div>
          </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
