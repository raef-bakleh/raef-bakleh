import React, { useState } from "react";
import classes from "../Portfolio/Portfolio.module.css";
import "../Portfolio/Portfolio.module.css";
import Projekt1 from "../../pages/img/project1.png";
import Projekt2 from "../../pages/img/project2.png";
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

import SwiperCore, { Autoplay } from "swiper";

function Portfolio() {
  SwiperCore.use([Autoplay]);

  // const swiper = useSwiper();
  const [swiper, setSwiper] = useState(null);
  return (
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

      <div>
        <Swiper
          spaceBetween={30}
          className={classes.swiperContainer}
          slidesPerView={3}
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
              <Image src={Projekt1} className={classes.projectPhoto}></Image>
              <p>Food Ordering Website</p>
              <div className={classes.projektOverlay}>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>Demo</p>
                  <div className={classes.projektOverlay}>
                    <Link className={classes.link} href="#">
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link className={classes.link} href="#">
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </Link>
                <Link className={classes.link} href="#">
                  <p className={classes.projektOverlayP}>github</p>
                  <div className={classes.projektOverlay}>
                    <Link className={classes.link} href="#">
                      <p className={classes.projektOverlayP}>Demo</p>
                    </Link>
                    <Link className={classes.link} href="#">
                      <p className={classes.projektOverlayP}>github</p>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.swiperProject}>
              <Image src={Projekt2} className={classes.projectPhoto}></Image>
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
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
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
          </SwiperSlide>
          <SwiperSlide className={classes.swiperSlide}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
